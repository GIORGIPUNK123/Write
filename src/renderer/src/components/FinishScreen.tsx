export const FinishScreen = (props: {
  wpm: number;
  className: string;
  onPlayAgain: () => void;
}) => {
  return (
    <div
      className={`bg-primaryDark-800 opacity-80 z-10 flex-col h-full w-full absolute text-center items-center flex justify-center ${props.className} `}
    >
      {/* <Header loggedIn goBack /> */}
      <h1 className='text-center text-white font-medium text-2xl border-solid border-4 border-orange py-2 px-2 rounded-md'>
        Hi your wpm was {props.wpm !== 0 ? props.wpm : 'Loading'}
      </h1>
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
