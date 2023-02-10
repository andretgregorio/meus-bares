import { useState } from "react";

export default function Input({ name, label, value, placeholder }: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className="flex w-full flex-col gap-y-2.5">
      <label htmlFor={name} aria-labelledby={name}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        id={name}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="rounded border-transparent bg-slate-100 px-1.5 text-lg focus:border-transparent focus:ring-0"
      />
    </div>
  );
}
