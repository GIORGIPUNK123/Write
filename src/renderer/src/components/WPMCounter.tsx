export const WPMCounter = (props: { wpm: number }) => {
  return (
    <div className='flex items-center'>
      <div className='w-min min-w-min max-w-2xl h-8 dark:bg-primaryDark-800 border-solid border-x-orange border-t-orange border-b-primaryDark-600 border-2 rounded-sm dark:text-white px-3'>
        <span>WPM:</span>
        <span className='ml-1'>{props.wpm}</span>
      </div>
    </div>
  );
};
