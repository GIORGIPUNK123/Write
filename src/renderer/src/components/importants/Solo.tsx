import { useEffect, useRef, useState } from 'react';
import { Header } from './Header';
import { WPMCounter } from '../WPMCounter';
import { FinishScreen } from '../FinishScreen';
import { calculateWPM } from '../../functions/calculateWPM';
import { TextDisplayBox } from '../TextDisplayBox';
import { TypeInput } from '../TypeInput';
import useFetchWords from '../../hooks/useFetch';

export const Solo = () => {
  const { data: wordsArr, loading, error } = useFetchWords(25);
  const [completedWordsCount, setCompletedWordsCount] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [difference, setDifference] = useState(0);
  const [isCorrectWord, setIsCorrectWord] = useState(true);
  const staticDifference = useRef(0);
  const [mistakeWords, setMistakeWords] = useState<string[]>([]);
  // const [currentWord, setCurrentWord] = useState<string>('null');
  const isFinished =
    wordsArr.length !== 0 && completedWordsCount === wordsArr.length;
  const resetGame = () => {
    setCompletedWordsCount(0);
    setStartTime(0);
    setDifference(0);
    setIsCorrectWord(true);
    setMistakeWords([]);
    staticDifference.current = 0;
    setStartTime(Math.round(Date.now() / 1000));
  };
  if (!isCorrectWord) {
    console.log('isCorrectWord: ', isCorrectWord);

    // setMistakeWords((prevState) => [...prevState, currentWord]);
  }
  console.log('mistakeWords: ', mistakeWords);
  // console.log('currentWord: ', currentWord);
  useEffect(() => {
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
          // setCurrentWord={setCurrentWord}
          wordsArr={wordsArr}
          completedWordsCount={completedWordsCount}
          countChange={onCompletedWordsCountChange}
          setIsCorrectWord={setIsCorrectWord}
          setMistakeWords={setMistakeWords}
          mistakeWords={mistakeWords}
        />
      </div>
    );
  };
  const renderFinishScreen = () => {
    if (isFinished) {
      return (
        <FinishScreen
          className=''
          mistakeWords={mistakeWords}
          completedWordsCount={completedWordsCount}
          staticDifferenceCurrent={staticDifference.current}
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
