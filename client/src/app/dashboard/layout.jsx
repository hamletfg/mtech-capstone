import Button from "../_components/Button";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="bg-gray-300 flex flex-col w-fit min-h-screen p-3">
        <Link
          href="/dashboard"
          className="hover:cursor-pointer hover:bg-gray-100 p-3 my-3 flex rounded-md"
        >
          <span>&#128187;</span>
          <span>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/courses"
          className="hover:cursor-pointer hover:bg-gray-100 p-3 mb-3 flex rounded-md"
        >
          <span>&#128193;</span>
          <span>Courses</span>
        </Link>
        <Link
          href="/dashboard/profile"
          className="hover:cursor-pointer hover:bg-gray-100 p-3 mb-3 flex rounded-md"
        >
          <span>&#128100;</span>
          <span>Profile</span>
        </Link>
        <div className="hover:cursor-pointer hover:bg-gray-100 p-3 mb-3 flex rounded-md">
          <span>&#8618; Logout</span>
        </div>
      </div>
      <div className="w-[100%]">{children}</div>
    </div>
  );
}
