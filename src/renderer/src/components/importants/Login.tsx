import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { AuthInput } from '../../atoms/AuthInput';
import { AuthBtn } from '../../atoms/AuthBtn';

export const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn, user, signInNormally } = UserAuth();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error(err);
    }
  };

  const handleNormalSignIn = async () => {
    try {
      await signInNormally(emailValue, passwordValue);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user, navigate]);

  return (
    <div className='flex flex-col items-center'>
      <h2 className='mt-8 mb-8 text-4xl text-white'>Login</h2>
      <div className='w-full px-20 md:w-3/4'>
        <div className='mb-8'>
          <AuthInput
            id='email'
            value={emailValue}
            setValue={setEmailValue}
            labelName='Email'
            type='email'
            placeholder='Email'
            required
          />
        </div>

        <div className='mt-8'>
          <AuthInput
            id='password'
            value={passwordValue}
            setValue={setPasswordValue}
            labelName='Password'
            type='password'
            placeholder='Password'
            required
          />
        </div>
      </div>
      <div className='mt-8'>
        <div onClick={handleNormalSignIn}>
          <AuthBtn type='login' text='Log In' />
        </div>
      </div>
      <div className='mt-4'>
        <div onClick={handleGoogleSignIn}>
          <AuthBtn type='google' text='Log In with google' />
        </div>
      </div>
    </div>
  );
};
