export default function Button({ type, onclick, children }) {
  return (
    <button
      type={type}
      className="bg-gray-700 py-3 px-5 rounded-lg w-fit text-white hover:cursor-pointer"
      onClick={onclick}
    >
      {children}
    </button>
  );
}
