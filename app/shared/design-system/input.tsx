import { useState } from "react";

export default function Input({
  name,
  label,
  value,
  placeholder,
  onChange,
}: InputProps) {
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded border-transparent bg-slate-100 px-1.5 text-lg focus:border-transparent focus:ring-0"
      />
    </div>
  );
}
