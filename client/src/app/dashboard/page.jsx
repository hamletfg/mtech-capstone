import Link from "next/link";

export default function Page() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-3 gap-5 text-xl text-center">
        <Link href="/dashboard/courses">
          <div className="bg-gray-200 rounded-2xl p-10">
            <span>&#128193;</span>
            <span>Courses</span>
          </div>
        </Link>
        <Link href="/dashboard/profile">
          <div className="bg-gray-200 rounded-2xl p-10">
            <span>&#128100;</span>
            <span>Profile</span>
          </div>
        </Link>
        <Link href="/dashboard">
          <div className="bg-gray-200 rounded-2xl p-10">
            <span>&#128205;</span>
            <span>Placeholder</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
