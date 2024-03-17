import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { AuthInput } from '../atoms/AuthInput';
import { AuthBtn } from '../atoms/AuthBtn';
export const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, user } = UserAuth();

  const handleGoogleSignIn = () => {
    try {
      googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <div className='flex flex-col items-center'>
      <h2 className='mt-8 mb-8 text-4xl text-white'>Login</h2>
      <div className='w-full px-20 md:w-3/4'>
        <div className='mb-8'>
          <AuthInput
            labelName='Email'
            type='text'
            placeholder='Email'
            required
          />
        </div>

        <div className='mt-8'>
          <AuthInput
            labelName='Password'
            type='password'
            placeholder='Password'
            required
          />
        </div>
      </div>
      <div className='mt-8'>
        <AuthBtn type='login' text='Log In' />
      </div>
      <div className='mt-4'>
        <div onClick={handleGoogleSignIn}>
          <AuthBtn type='google' text='Log In with google' />
        </div>
      </div>
    </div>
  );
};
