import { FC } from "react";

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  label?: string;
  type?: string;
  register?: any;
}

const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  register,
  ...rest
}) => {
  return (
    <div className="mb-3 w-full">
      <input
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        {...register}
        {...rest}
        className={`block w-full px-3 py-2 border transition-all duration-300 ease-in-out ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200`}
      />
      <div className="h-[10px]">
        <p
          className={`text-[10px] text-red-500 transition-all duration-300 ease-in-out
          ${error ? "opacity-100" : "opacity-0"}
          `}
        >
          {error}
        </p>
      </div>
    </div>
  );
};

export default Input;
