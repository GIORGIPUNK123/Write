import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
export const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div>
      <h1 className='text-white text-2xl font-medium'>Click On it</h1>;
      <button
        className='rounded-md w-44 h-12 bg-orange hover:bg-orange-400 transition-colors font-medium'
        onClick={handleGoogleSignIn}
      >
        This is google login button
      </button>
    </div>
  );
};
