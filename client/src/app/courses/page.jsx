import Link from "next/link";

export default async function Page() {
  const res = await fetch("http://localhost:3001/api/courses");

  try {
    if (!res.ok) {
      throw new Error("Failed to fetch course data");
    }
  } catch {
    return <div>Failed to fetch course data</div>;
  }

  const data = await res.json();

  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-8 p-10">
      {data.map((course, index) => {
        return (
          <Link
            href={`/courses/${course.course_id}`}
            key={index}
            className="border border-gray-500 p-5 rounded-sm overflow-hidden"
          >
            <div>
              <div className="mb-2">
                <span>{course.course_id}</span>
              </div>
              <div className="mb-2">{course.title}</div>
              <div>
                <span className="text-sm  line-clamp-3">
                  {course.description}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
