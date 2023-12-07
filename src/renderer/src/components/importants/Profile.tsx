import { UserAuth } from '@renderer/context/AuthContext';
import profileIcon from '../../images/profileIcon.svg';
import { Header } from './Header';

export const Profile = () => {
  const { user } = UserAuth();
  const lvl = 1;
  const rank = 'bronze';
  const lvlPercentage = 50;
  const rankPercentage = 79;

  return (
    <div>
      <Header loggedIn goBack={true} />
      <div className='flex flex-col justify-center mx-24'>
        <div className='flex items-center'>
          <img src={profileIcon} alt='gearIcon' className='w-16 mt-1 invert' />
          <span className='ml-4 text-2xl font-medium text-white'>
            {user?.displayName}
          </span>
        </div>
        <div className='flex justify-between mt-8 '>
          <div className='relative flex flex-col items-center bg-gray-700 rounded-lg h-36 w-96'>
            <span className='mt-4 text-xl font-medium text-white'>
              Level - {lvl}
            </span>
            <div className='absolute w-full px-12 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '>
              <div className='relative'>
                <div
                  className='w-full h-2 bg-red-600 rounded-sm'
                  style={{
                    background: `linear-gradient(to right, rgb(220 38 38) ${lvlPercentage}%, rgb(31 41 55) ${lvlPercentage}%)`,
                  }}
                />
              </div>
            </div>
            <span className='mt-10 text-2xl text-white'>{lvlPercentage}%</span>
          </div>
          <div className='relative flex flex-col items-center bg-gray-700 rounded-lg h-36 w-96'>
            <span className='mt-4 text-xl font-medium text-white'>
              Rank - {rank}
            </span>
            <div className='absolute flex flex-col w-full px-12 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '>
              <div className='relative'>
                <div
                  className='w-full h-2 bg-red-600 rounded-sm'
                  style={{
                    background: `linear-gradient(to right, rgb(220 38 38) ${rankPercentage}%, rgb(31 41 55) ${rankPercentage}%)`,
                  }}
                />
              </div>
            </div>
            <span className='mt-10 text-2xl text-white'>{rankPercentage}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
