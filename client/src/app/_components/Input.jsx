export default function Input({ type, id, name, placeholder, onChange }) {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="border py-2 px-4 rounded-lg"
      />
    </div>
  );
}
