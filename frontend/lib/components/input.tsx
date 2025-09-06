import { twMerge } from "tailwind-merge"

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export function InputField({ className, ...props}: InputFieldProps) {
  return <input className={twMerge("w-full py-2 px-1 border-b-2 border-b-gray-400", className)} {...props} />
}

export function LabelledInput(props: InputFieldProps) {
  return (
    <label htmlFor={props.name} className="w-full">
      <InputField {...props} />
    </label>
  );
}
