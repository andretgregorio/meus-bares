export default function Input({ name, label, value }: InputProps) {
  return (
    <div>
      <label htmlFor={name} aria-labelledby={name}>
        {label}
      </label>
      <input type="text" name={name} id={name} value={value} />
    </div>
  );
}
