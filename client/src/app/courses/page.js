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
    <div>
      {data.map((course, index) => {
        return (
          <div key={index}>
            <div>{course.course_id}</div>
            <div>{course.title}</div>
          </div>
        );
      })}
    </div>
  );
}
