type InputProps = {
  name: string;
  label: string;
};

export default function Input({ name, label }: InputProps) {
  return (
    <div>
      <label htmlFor={name} aria-labelledby={label}>
        {label}
      </label>
      <input name={name} id={name} />
    </div>
  );
}
