import React from 'react';

interface InputFieldProps {
  type: string;
  placeholder: string;
  className?: string;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, className = '', icon }) => {
  return (
    <div className={`flex gap-5 justify-between items-start px-8 py-5 font-medium whitespace-nowrap rounded-xl bg-slate-100 text-neutral-500 text-opacity-70 max-md:px-5 max-md:max-w-full ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent w-full focus:outline-none"
        aria-label={placeholder}
      />
      {icon}
    </div>
  );
};

export default InputField;