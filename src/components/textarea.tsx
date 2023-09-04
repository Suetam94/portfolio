interface ITextarea {
  id: string;
  labelTitle: string;
  placeholder: string;
  onChange: (value: string, param: string) => void;
}
const Textarea = ({ id, placeholder, labelTitle, onChange }: ITextarea) => {
  return (
    <>
      <label
        className="font-ibmPlexMono font-semibold text-xs text-background-white mb-1.5"
        htmlFor={id}>
        {labelTitle}
      </label>
      <textarea
        onChange={(e) => onChange(e.target.value, id)}
        className="rounded w-80 h-32 p-3 placeholder:text-[#757575]"
        id={id}
        placeholder={placeholder}
      />
    </>
  );
};

export default Textarea;
