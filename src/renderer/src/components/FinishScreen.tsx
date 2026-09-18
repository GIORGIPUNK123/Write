import { calculateWPM } from '@renderer/functions/calculateWPM';
import useLevelUpLogic from '@renderer/hooks/useLevelUpLogic';

export const FinishScreen = (props: {
  // wpm: number;
  className: string;
  mistakeWords: string[];
  completedWordsCount: number;
  staticDifferenceCurrent: number;
  onPlayAgain: () => void;
}) => {
  const wpm = calculateWPM(
    props.completedWordsCount,
    props.staticDifferenceCurrent
  );
  const { currentXp, gainedXp, maxXp } = useLevelUpLogic(
    props.completedWordsCount,
    props.mistakeWords,
    wpm
  );
  console.log('mistakeWordsArr from finishScreen: ', props.mistakeWords);
  const leftoverXp =
    currentXp + gainedXp > maxXp ? currentXp + gainedXp - maxXp : 0;
  return (
    <div
      className={`bg-primaryDark-800 opacity-80 z-10 flex-col h-full w-full absolute text-center items-center flex justify-center ${props.className} `}
    >
      {/* <Header loggedIn goBack /> */}
      <h1 className='text-center text-white font-medium text-2xl border-solid border-4 border-orange py-2 px-2 rounded-md'>
        Hi your wpm was {wpm !== 0 ? wpm : 'Loading'}
      </h1>
      <h2 className='text-center text-white font-medium text-2xl border-solid border-4 border-orange py-2 px-2 rounded-md'>
        currentXp = {currentXp} | gainedXp = {gainedXp}
        {leftoverXp > 0 ? ` | leftoverXp = ${leftoverXp}` : ''}
      </h2>
      <h3 className='text-center text-white font-medium text-2xl border-solid border-4 border-orange py-2 px-2 rounded-md'>
        maxXp = {maxXp}
      </h3>
      <div>
        <button
          className=' mt-8 rounded-md w-44 h-12 bg-orange hover:bg-orange-400 transition-colors font-medium text-white'
          onClick={props.onPlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
