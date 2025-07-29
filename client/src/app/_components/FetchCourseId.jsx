"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

export default function FetchCoursesId({ courseId, userId }) {
  const [courseData, setCourseData] = useState([]);
  //const [id, setId] = useState(null);

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
        console.log(data);
        setCourseData(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchCourseData();
  }, [courseId]);

  const handleRegister = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token");
      }

      const res = await fetch(`/api/register/${courseId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error registering");
      }
      const data = await res.json();
      console.log("REGISTERED", courseId, userId, data);
    } catch (err) {
      console.error("Error caught:", err);
    }
  };

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
      <Button onclick={handleRegister}>Register</Button>
    </div>
  );
}
