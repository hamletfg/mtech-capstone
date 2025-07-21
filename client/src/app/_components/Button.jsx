export default function Button({ onclick, children }) {
  return (
    <div
      className="bg-gray-700 py-3 px-5 rounded-lg w-fit text-white"
      onclick={onclick}
    >
      {children}
    </div>
  );
}
