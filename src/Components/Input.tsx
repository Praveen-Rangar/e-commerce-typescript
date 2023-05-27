import { useField } from "formik";

const Input = (props: any) => {
  const field = useField(props.name);

  const [data, meta] = field;

  const { value, onChange, onBlur } = data;
  const { error, touched } = meta;

  return (
    <div className="p-2 w-full">
      <div className="relative">
        <label htmlFor={props.id} className="leading-7 text-sm text-gray-600">
          {props.label}
        </label>
        <input
          id={props.id}
          onBlur={onBlur}
          autoComplete={props.autoComplete}
          value={value}
          onChange={onChange}
          type={props.type}
          name={props.name}
          className="w-full bg-gray-100 bg-opacity-50 rounded border  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out "
        />
      </div>
      {error && touched && (
        <div className="text-orange-500 text-sm ">{error}</div>
      )}
    </div>
  );
};

export default Input;
