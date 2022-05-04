import clsx from "clsx"

interface InputFieldProps extends React.ComponentPropsWithoutRef<"input"> {
  disabled?: boolean
  placeholder: string
  value: string
}

const InputField: React.FC<InputFieldProps> = ({
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
        className={clsx("input-field")}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  )
}

export default InputField
