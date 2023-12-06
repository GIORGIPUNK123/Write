import {
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from 'firebase/auth';
import { authentication } from '../firebase-config';
import { useEffect } from 'react';

export const Login = () => {
  useEffect(() => {
    const asyncFunc = async () => {
      const response = await getRedirectResult(authentication);
      console.log('Response: ', response);
    };
    try {
      asyncFunc();
    } catch (error) {
      console.error(error);
    }
  }, []);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(authentication, provider);
  };

  return (
    <div>
      <h1 className='text-white text-2xl font-medium'>Click On it</h1>;
      <button
        className='rounded-md w-44 h-12 bg-orange hover:bg-orange-400 transition-colors font-medium'
        onClick={signInWithGoogle}
      >
        This is google login button
      </button>
    </div>
  );
};
