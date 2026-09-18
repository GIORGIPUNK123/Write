import { isCorrectWord } from '../functions/isCorrectWord';
import { useEffect, useState } from 'react';
export const TypeInput = (props: {
  wordsArr: string[];
  completedWordsCount: number;
  countChange: any;
  setIsCorrectWord: any;
  // setCurrentWord: (currWord: string) => void;
  mistakeWords: string[];
  setMistakeWords: any;
}) => {
  const [inputText, setInputText] = useState('');
  const correct = isCorrectWord(
    inputText,
    props.wordsArr[props.completedWordsCount],
    props.countChange,
    setInputText
  );
  useEffect(() => {
    const currentWord = props.wordsArr[props.completedWordsCount];

    // console.log('props.mistakeWords.length: ', props.mistakeWords.length);
    // console.log(
    //   'props.mistakeWords[props.mistakeWords.length - 1]: ',
    //   props.mistakeWords[props.mistakeWords.length - 1]
    // );
    props.setIsCorrectWord(correct);
    // props.setCurrentWord(currentWord);
    if (
      !correct &&
      props.mistakeWords[props.mistakeWords.length - 1] !== currentWord
    ) {
      console.log(
        'props.mistakeWords[props.mistakeWords.length]: ',
        props.mistakeWords[props.mistakeWords.length]
      );
      props.setMistakeWords((prevState) => [
        ...prevState,
        props.wordsArr[props.completedWordsCount],
      ]);
    }
  }, [correct]);

  return (
    <input
      disabled={props.completedWordsCount === props.wordsArr.length}
      type='text'
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      // onBlur={() => inputRef.current?.focus()}
      autoFocus
      // ref={inputRef}
      className={`bg-transparent caret-orange outline-orange ${
        correct ? 'border-orange' : 'border-red-500 outline-none'
      } border-orange  mt-16 w-[80%] text-center dark:text-primaryDark-100 font-sans font-medium text-2xl  h-16 border-4 border-solid rounded-md py-4 items-center`}
    />
  );
};
