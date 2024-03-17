import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
  // signInWithEmailAndPassword,
} from 'firebase/auth';
import { authentication, db } from '../firebase-config';
import {
  collection,
  // doc,
  // getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { userDbType } from '@renderer/types';

// Define the context type
interface AuthContextType {
  googleSignIn: () => void;
  logOut: () => void;
  user: User | null;
  userAdditionalInfo: userDbType | null;
}

// Provide the context type when creating the context
const AuthContext = createContext<AuthContextType>({
  googleSignIn: () => {},
  logOut: () => {},
  user: null,
  userAdditionalInfo: null,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userAdditionalInfo, setUserAdditionalInfo] =
    useState<userDbType | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(authentication, provider);
  };

  // const signInNormally = (email: string, password: string) => {
  //   signInWithEmailAndPassword(authentication, email, password);
  // };

  const logOut = async () => {
    await signOut(authentication);
  };
  const usersDb = collection(db, 'users');

  const getDbUserByUid = async (uid: string): Promise<userDbType | null> => {
    try {
      const q = query(usersDb, where('uid', '==', uid));
      const querySnapshot: any = await getDocs(q);
      return querySnapshot.docs[0].data();
    } catch (error) {
      console.log('error from getDbUserByUid: ', error);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      authentication,
      async (currentUser) => {
        // check if user is in usersDB if not create new one
        if (currentUser) {
          console.log('user is logged in');
          const dbUser = await getDbUserByUid(currentUser.uid);
          console.log('dbUser: ', dbUser);
          setUserAdditionalInfo(dbUser);
          // if (currentUser?.uid && dbUser) {
          //   console.log('check data from firestore: ');
          //   const userDocRef = doc(usersDb, currentUser.uid);
          //   try {
          //     const userDocSnapshot = await getDoc(userDocRef);
          //     if (userDocSnapshot.exists()) {
          //       const userData: any = userDocSnapshot.data();
          //       setUserAdditionalInfo(userData);
          //       console.log('User data from firestore:', userData);
          //       // Process user data here
          //     } else {
          //       console.log('No such document!');
          //     }
          //   } catch (err) {
          //     console.error('Error getting document:', err);
          //   }
          // }
        }
        setUser(currentUser);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  console.log('user: ', user?.displayName);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, user, userAdditionalInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
