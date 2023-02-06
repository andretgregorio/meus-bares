import { useState } from "react";

export default function Input({ name, label, value }: InputProps) {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div>
      <label htmlFor={name} aria-labelledby={name}>
        {label}
      </label>
      <input type="text" name={name} id={name} value={inputValue} />
    </div>
  );
}
