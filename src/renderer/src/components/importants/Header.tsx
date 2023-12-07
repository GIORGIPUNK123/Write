import gearIcon from '../../images/gearIcon.svg';
import logOutIcon from '../../images/logOutIcon.svg';
import burgerbarIcon from '../../images/burgerbarIcon.svg';
import storeIcon from '../../images/storeIcon.svg';
import profileIcon from '../../images/profileIcon.svg';
import goBackIcon from '../../images/goBackIcon.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const liBaseClass = `py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-primaryDark-800 rounded-md cursor-pointer flex justify-center`;

export const Header = (props: { loggedIn: boolean; goBack: boolean }) => {
  const { logOut, user } = UserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.error(err);
    }
  };

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const toggleButton = () => {
    console.log('isClicked: ', isClicked);
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };
  if (props.loggedIn) {
    return (
      <header>
        <div className='flex items-center justify-between h-16 px-16'>
          <div className='flex items-center text-center'>
            {props.goBack ? (
              <img
                src={goBackIcon}
                className='w-12 mr-5 cursor-pointer'
                onClick={() => {
                  navigate(-1);
                }}
              />
            ) : null}
            <h1 className='font-sans text-2xl font-medium dark:text-white'>
              Write
            </h1>
          </div>
          <div></div>
          <div className='flex items-center'>
            <div></div>
            <img
              onClick={toggleButton}
              src={burgerbarIcon}
              className='cursor-pointer invert w-14 aspect-square'
              alt='burgerbarIcon'
            />
          </div>
        </div>
        <div
          className={` ${
            isClicked ? '' : 'hidden'
          }  z-50 dark:text-white font-sans font-medium text-xl text-center absolute top-16 right-0 w-[30vw] h-[100vh] bg-primaryDark-600`}
        >
          <ul className='flex flex-col mt-4 font-medium'>
            <li
              className={liBaseClass}
              onClick={() => {
                navigate('/profile');
              }}
            >
              <div className='flex items-center text-center'>
                {user?.displayName}
                <img
                  src={profileIcon}
                  alt='profileIcon'
                  className='w-[28px] invert ml-2 mt-1'
                />
              </div>
            </li>
            <li className={liBaseClass}>
              <div className='flex items-center text-center'>
                Store
                <img
                  src={storeIcon}
                  alt='storeIcon'
                  className='w-[28px] invert ml-2 mt-1'
                />
              </div>
            </li>
            <li className={liBaseClass}>
              <div className='flex items-center text-center'>
                Settings
                <img
                  src={gearIcon}
                  alt='gearIcon'
                  className='w-[28px] invert ml-2 mt-1'
                />
              </div>
            </li>

            <li className={liBaseClass} onClick={handleLogOut}>
              <div className='flex items-center text-center'>
                Log Out
                <img
                  src={logOutIcon}
                  alt='logOutIcon'
                  className='w-[28px] invert ml-2 mt-1'
                />
              </div>
            </li>
          </ul>
        </div>
      </header>
    );
  } else
    return (
      <header className='flex items-center justify-between h-16 px-16 dark:bg-primaryDark'>
        <h1 className='font-sans text-2xl font-medium dark:text-white'>
          Write
        </h1>
        <div></div>
        <button
          type='button'
          className='w-24 h-10 font-sans font-medium rounded-md dark:bg-buttonDark dark:text-white'
        >
          Default
        </button>
      </header>
    );
};
