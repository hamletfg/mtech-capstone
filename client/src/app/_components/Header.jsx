import Link from "next/link";
export default function Header() {
  return (
    <div className="bg-gray-300 flex w-full h-auto">
      <Link
        href="/profile"
        className="hover:cursor-pointer hover:bg-gray-100 p-3 mr-3"
      >
        <span>Profile</span>
      </Link>
      <Link
        href="/courses"
        className="hover:cursor-pointer hover:bg-gray-100 p-3 mr-3"
      >
        Courses
      </Link>
    </div>
  );
}
