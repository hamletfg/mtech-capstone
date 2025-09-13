import Link from "next/link";

export default function Page() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-5 text-xl text-center">
        <Link href="/dashboard/courses">
          <div className="bg-white rounded-2xl border border-gray-200 p-10">
            <span>&#128193;</span>
            <span>Courses</span>
          </div>
        </Link>
        <Link href="/dashboard/profile">
          <div className="bg-white rounded-2xl border border-gray-200 p-10">
            <span>&#128100;</span>
            <span>Profile</span>
          </div>
        </Link>
        <Link href="/dashboard">
          <div className="bg-white rounded-2xl border border-gray-200 p-10">
            <span>&#128205;</span>
            <span>Something else</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
