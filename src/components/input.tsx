
interface IInput {
  id: string;
  labelTitle: string;
  placeholder: string;
  inputType: string;
  onChange: (value: string, param: string) => void
}

const Input = ({ id, labelTitle, placeholder, inputType, onChange }: IInput) => {
  return (
    <div className={`flex flex-col justify-start mb-6`}>
      <label
        className="font-ibmPlexMono font-semibold text-xs text-background-white mb-1.5"
        htmlFor={id}>
        {labelTitle}
      </label>
      <input
        onChange={(e) => onChange(e.target.value, id)}
        className="rounded w-80 h-10 p-3 placeholder:text-[#757575]"
        id={id}
        type={inputType}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
