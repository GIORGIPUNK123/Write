interface InputType {
  placeholder: string;
  type: 'text' | 'email' | 'password';
  required: boolean;
  value: string | number;
  setValue: (value: string) => void;
  id: string;
}

interface LabelType {
  labelName: string;
  // htmlFor: string;
}

export const AuthInput = (props: InputType & LabelType) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className='block mb-2 text-sm font-medium text-gray-900 xl:text-xl dark:text-white'
      >
        {props.labelName}
      </label>
      <input
        type={props.type}
        id={props.id}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm xl:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      />
    </div>
  );
};
