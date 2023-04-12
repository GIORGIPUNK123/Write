import swordsIcon from '../../images/swordsIcon.svg';
import typewritericon from '../../images/typewritericon.svg';
import duelIcon from '../../images/duelIcon.svg';
import { Header } from './Header';
import { Link } from 'react-router-dom';

const MyBlock = (props: { name: string; image: any; link: string }) => {
  return (
    <>
      <div className='w-96  h-44 rounded-md dark:bg-primaryDark-700 dark:text-white flex flex-col items-center justify-evenly mx-6 my-6'>
        <div className='flex'>
          <span className='text-xl mr-1 font-semibold'>{props.name}</span>
          <img className='w-8 ml-1' src={props.image} alt='swordsIcon' />
        </div>
        <Link to={props.link}>
          <button className='rounded-md w-44 h-12 bg-orange hover:bg-orange-400 transition-colors font-medium'>
            Play
          </button>
        </Link>
      </div>
    </>
  );
};
export const Home = () => {
  return (
    <>
      <Header loggedIn goBack={false} />
      <div className='flex flex-wrap justify-evenly h-full'>
        <MyBlock name='solo' image={typewritericon} link='./solo' />
        <MyBlock name='duel' image={duelIcon} link='./solo' />
        <MyBlock name='ranked' image={swordsIcon} link='./solo' />
      </div>
    </>
  );
};
