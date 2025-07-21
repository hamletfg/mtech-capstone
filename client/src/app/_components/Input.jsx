export default function Input({ type, id, name, placeholder }) {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="border py-2 px-4 rounded-lg"
      />
    </div>
  );
}
