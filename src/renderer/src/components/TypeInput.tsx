import { isCorrectWord } from '../functions/isCorrectWord';
import { useEffect, useState } from 'react';
export const TypeInput = (props: {
  wordsArr: string[];
  completedWordsCount: number;
  countChange: any;
  correctWordChange: any;
}) => {
  const [inputText, setInputText] = useState('');
  const correct = isCorrectWord(
    inputText,
    props.wordsArr[props.completedWordsCount],
    props.countChange,
    setInputText
  );

  useEffect(() => {
    props.correctWordChange(correct);
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
