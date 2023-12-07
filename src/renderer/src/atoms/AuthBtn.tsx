interface BtnType {
  text: string;
}

export const AuthBtn = (props: BtnType) => {
  return (
    <div>
      <button
        type='submit'
        className='w-64 h-12 text-sm font-medium rounded-md transition-colors sm:text-md xl:text-2xl bg-orange hover:bg-orange-400'
      >
        {props.text}
      </button>
    </div>
  );
};
