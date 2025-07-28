export default function Input({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border py-2 px-4 rounded-lg"
        required
      />
    </div>
  );
}
