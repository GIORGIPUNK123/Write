interface BtnType {
  text: string;
  type: 'login' | 'google';
}
const btnBaseClass = `relative flex items-center w-64 h-12 px-4 text-sm font-medium transition-colors rounded-md md:text-md xl:w-96 sm:text-md xl:text-xl`;
const spanBaseClass = `absolute text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`;
export const AuthBtn = (props: BtnType) => {
  switch (props.type) {
    case 'login':
      return (
        <div>
          <button className={`${btnBaseClass}  bg-orange hover:bg-orange-400`}>
            <span className={spanBaseClass}>{props.text}</span>
          </button>
        </div>
      );

    case 'google':
      return (
        <div>
          <button className={`${btnBaseClass} bg-blue-500  hover:bg-blue-400`}>
            <div className='h-[80%] invert aspect-square bg-[url(../images/googleIcon.svg)] bg-contain bg-no-repeat'></div>{' '}
            <span className={spanBaseClass}> {props.text}</span>
          </button>
        </div>
      );
    default:
      return (
        <div>
          <button className={`${btnBaseClass}  bg-orange hover:bg-orange-400`}>
            <span className={spanBaseClass}> {props.text}</span>
          </button>
        </div>
      );
  }
};
