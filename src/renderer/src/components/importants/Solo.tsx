import { useEffect, useRef, useState } from 'react';
import { Header } from './Header';
import { WPMCounter } from '../WPMCounter';
import { FinishScreen } from '../FinishScreen';
import { calculateWPM } from '../../functions/calculateWPM';
import { TextDisplayBox } from '../TextDisplayBox';
import { TypeInput } from '../TypeInput';
import { fetchWords } from '../../functions/fetchWords';

export const Solo = () => {
  const [wordsArr, setWordsArr] = useState([]);
  const [completedWordsCount, setCompletedWordsCount] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [difference, setDifference] = useState(0);
  const [isCorrectWord, setIsCorrectWord] = useState(false);
  const staticDifference = useRef(0);

  const resetGame = () => {
    setWordsArr([]);
    setCompletedWordsCount(0);
    setStartTime(0);
    setDifference(0);
    // setIsCorrectWord(false);
    staticDifference.current = 0;
    fetchWords(5, setWordsArr);
    setStartTime(Math.round(Date.now() / 1000));
  };

  useEffect(() => {
    fetchWords(25, setWordsArr);
    setStartTime(Math.round(Date.now() / 1000));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDifference(Math.round(Date.now() / 1000) - startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  useEffect(() => {
    if (completedWordsCount === wordsArr.length) {
      staticDifference.current = difference;
    }
  }, [completedWordsCount, wordsArr]);

  const renderTextDisplay = () => {
    return (
      <div className='flex flex-col items-center justify-center mt-24'>
        <TextDisplayBox
          wordsArr={wordsArr}
          wordsCount={completedWordsCount}
          isCorrectWord={isCorrectWord}
        />
        <TypeInput
          wordsArr={wordsArr}
          completedWordsCount={completedWordsCount}
          countChange={onCompletedWordsCountChange}
          correctWordChange={isCorrectWordChange}
        />
      </div>
    );
  };
  const renderFinishScreen = () => {
    if (wordsArr.length !== 0 && completedWordsCount === wordsArr.length) {
      return (
        <FinishScreen
          className={`${
            completedWordsCount !== wordsArr.length ? 'hidden' : ''
          }`}
          wpm={calculateWPM(completedWordsCount, staticDifference.current)}
          onPlayAgain={resetGame}
        />
      );
    }
    return null;
  };
  const renderLittleCounter = () => (
    <div className='flex justify-center'>
      <div className='absolute right-[10%] bottom-0'>
        <WPMCounter
          wpm={
            completedWordsCount === wordsArr.length
              ? calculateWPM(completedWordsCount, staticDifference.current)
              : calculateWPM(completedWordsCount, difference)
          }
        />
      </div>
    </div>
  );
  const onCompletedWordsCountChange = (count: number) => {
    setCompletedWordsCount(count);
  };
  const isCorrectWordChange = (correctness: boolean) => {
    setIsCorrectWord(correctness);
  };

  return (
    <>
      <Header loggedIn goBack />
      {renderFinishScreen()}
      {renderTextDisplay()}
      {renderLittleCounter()}
    </>
  );
};

export default Solo;
