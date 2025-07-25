export default async function Page({ params }) {
  const { courseId } = await params;

  const res = await fetch(`http://localhost:3001/api/courses/${courseId}`);
  try {
    if (!res.ok) {
      throw new Error("Failed to fetch course data");
    }
  } catch {
    return <div>Failed to fetch course data</div>;
  }

  const data = await res.json();

  return (
    <div className="p-10">
      <h1>{data.title}</h1>
      <div>
        <span>Schedule: </span>
        {data.schedule}
      </div>
      <div>
        <span>Classroom number: </span>
        {data.classroom_number}
      </div>
      <div>
        <span>Credit hours: </span>
        {data.credit_hours}
      </div>
      <div>
        <span>Tuition cost: </span>
        {data.tuition_cost}
      </div>
    </div>
  );
}
