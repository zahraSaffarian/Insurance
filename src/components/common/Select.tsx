import React from "react";

interface SelectProps {
  label: string;
  options: { value: number; label: string }[];
  value?: number | null;
  onChange?: (value: number) => void;
  error?: string;
  disabled?: boolean; // Add the disabled property
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  error,
  label,
  disabled = false,
}) => {
  return (
    <div>
      <select
        className={`block w-full px-3 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 ${
          disabled ? "bg-gray-100 opacity-30" : ""
        }`}
        value={value || ""}
        onChange={(e) => onChange && onChange(Number(e.target.value))}
        disabled={disabled}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Select;
