interface InputType {
  placeholder: string;
  type: 'text' | 'email' | 'password';
  required: boolean;
}
interface LabelType {
  labelName: string;
}

export const AuthInput = (props: InputType & LabelType) => {
  const Label = (props: LabelType) => (
    <label className='block mb-2 text-sm font-medium text-gray-900 xl:text-xl dark:text-white'>
      {props.labelName}
    </label>
  );
  const Input = (props: InputType) => (
    <input
      type={props.type}
      id='first_name'
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm xl:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      placeholder={props.placeholder}
      required={props.required}
    />
  );

  return (
    <div>
      <Label labelName={props.labelName} />
      <Input
        type={props.type}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};
