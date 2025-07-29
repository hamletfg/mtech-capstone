"use client";

import { useEffect, useState } from "react";

export default function FetchCoursesId({ courseId }) {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const res = await fetch(`/api/courses/${courseId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch course data");
        }

        const data = await res.json();
        setCourseData(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCourseData();
  }, [courseId]);

  return (
    <div className="p-10">
      <h1>{courseData.title}</h1>
      <div>
        <span>Schedule: </span>
        {courseData.schedule}
      </div>
      <div>
        <span>Classroom number: </span>
        {courseData.classroom_number}
      </div>
      <div>
        <span>Credit hours: </span>
        {courseData.credit_hours}
      </div>
      <div>
        <span>Tuition cost: </span>
        {courseData.tuition_cost}
      </div>
    </div>
  );
}
