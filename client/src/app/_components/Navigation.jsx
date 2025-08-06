import Link from "next/link";
export default function Navigation() {
  return (
    <div className="bg-gray-300 flex w-full h-auto">
      <Link
        href="/dashboard"
        className="hover:cursor-pointer hover:bg-gray-100 p-3 mr-3"
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard/courses"
        className="hover:cursor-pointer hover:bg-gray-100 p-3 mr-3"
      >
        Courses
      </Link>
      <Link
        href="/dashboard/profile"
        className="hover:cursor-pointer hover:bg-gray-100 p-3 mr-3"
      >
        <span>Profile</span>
      </Link>
    </div>
  );
}
