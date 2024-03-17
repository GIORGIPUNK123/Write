import { UserAuth } from '../../context/AuthContext';
import profileIcon from '../../images/profileIcon.svg';
import { Header } from './Header';
import { rankToString } from '../../functions/rankToString';
import { maxXpForLvl } from '../../functions/maxXpForLvl';
import { calculatePercentage } from '../../functions/calculatePercentage';
import { maxPointsForRank } from '../../functions/maxPointsForRank';

export const Profile = () => {
  const { user, userAdditionalInfo } = UserAuth();
  if (userAdditionalInfo) {
    const { rank, rank_points, lvl, xp } = userAdditionalInfo;
    const maxRankPoints = maxPointsForRank(rank);
    const rankString = rankToString(rank);
    const maxXp = maxXpForLvl(lvl);
    const xpPercentage = calculatePercentage(xp, maxXp);
    const rankPercentage = calculatePercentage(rank_points, maxRankPoints);
    console.log('userAdditionalInfo: ', userAdditionalInfo);

    return (
      <div>
        <Header loggedIn goBack={true} />
        <div className='flex flex-col justify-center mx-24'>
          <div className='flex items-center'>
            <img
              src={profileIcon}
              alt='gearIcon'
              className='w-16 mt-1 invert'
            />
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
                      background: `linear-gradient(to right, rgb(220 38 38) ${
                        typeof xpPercentage === 'number' ? xpPercentage : ''
                      }%, rgb(31 41 55) ${
                        typeof xpPercentage === 'number' ? xpPercentage : ''
                      }%)`,
                    }}
                  />
                </div>
              </div>
              <span className='mt-10 text-2xl text-white'>
                {typeof xpPercentage === 'number' ? xpPercentage : ''}%
              </span>
            </div>
            <div className='relative flex flex-col items-center bg-gray-700 rounded-lg h-36 w-96'>
              <span className='mt-4 text-xl font-medium text-white'>
                Rank - {rankString}
              </span>
              <div className='absolute flex flex-col w-full px-12 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '>
                <div className='relative'>
                  <div
                    className='w-full h-2 bg-red-600 rounded-sm'
                    style={{
                      background: `linear-gradient(to right, rgb(220 38 38) ${
                        typeof rankPercentage === 'number' ? rankPercentage : ''
                      }%, rgb(31 41 55) ${
                        typeof rankPercentage === 'number' ? rankPercentage : ''
                      }%)`,
                    }}
                  />
                </div>
              </div>
              <span className='mt-10 text-2xl text-white'>
                {typeof rankPercentage === 'number' ? rankPercentage : ''}%
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <h1>Loading</h1>;
};
