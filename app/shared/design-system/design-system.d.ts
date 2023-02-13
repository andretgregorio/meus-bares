declare type InputProps = {
  label?: string;
  placeholder?: string;
  name: string;
  value: string | number | readonly string[];
  onChange: inputChangeFunction;
  ariaLabel?: string;
};

type inputChangeFunction = (value: string) => void;
