import clsx from "clsx"

interface InputFieldProps extends React.ComponentPropsWithoutRef<"input"> {
  disabled?: boolean
  className?: string
  placeholder: string
  value: string
  //   onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({
  className = "",
  onChange,
  placeholder = "",
  value = "",
  disabled = false,
  ...rest
}) => {
  return (
    <>
      <input
        type="text"
        className={clsx("input__field", className)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  )
}

export default InputField
