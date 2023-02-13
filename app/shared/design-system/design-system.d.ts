declare type InputProps = {
  label?: string;
  placeholder?: string;
  name: string;
  value: string | number | readonly string[];
  onChange: inputChangeFunction;
};

type inputChangeFunction = (value: string) => void;
