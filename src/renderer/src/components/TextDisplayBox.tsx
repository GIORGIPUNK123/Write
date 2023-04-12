export const TextDisplayBox = (props: {
  wordsArr: string[];
  wordsCount: number;
  isCorrectWord: boolean;
}) => {
  const MyComponent = (props: {
    index: number;
    spanLetters: JSX.Element[];
    wordsCount: number;
    correct: boolean;
  }) => {
    if (props.correct) {
      return (
        <div
          key={props.index}
          className={` ${
            props.wordsCount === props.index ? 'text-orange' : ''
          } flex w-min mr-1 ${
            props.wordsCount > props.index ? 'opacity-75' : ''
          }`}
        >
          {props.spanLetters}
        </div>
      );
    } else
      return (
        <div
          key={props.index}
          className={` ${
            props.wordsCount === props.index ? 'text-red-600' : ''
          } flex w-min mr-1 ${
            props.wordsCount > props.index ? 'opacity-75' : ''
          }`}
        >
          {props.spanLetters}
        </div>
      );
  };

  return (
    <>
      <div className='w-[80%] text-center dark:text-primaryDark-100 font-sans font-medium text-2xl border-primaryDark-200 min-h-[100px] border-4 border-solid rounded-md py-4 items-center relative'>
        <div className='flex justify-center flex-wrap mx-4'>
          {props.wordsArr.map((word, dadIndex) => {
            const letters = word.split('');
            const spanLetters = letters.map((letter, index) => {
              return <span key={index}>{letter}</span>;
            });
            return (
              <MyComponent
                correct={props.isCorrectWord}
                wordsCount={props.wordsCount}
                index={dadIndex}
                spanLetters={spanLetters}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
