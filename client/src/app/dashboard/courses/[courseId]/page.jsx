"use client";

import FetchCoursesId from "@/app/_components/FetchCourseId";
import { use, useEffect, useState } from "react";
import Button from "@/app/_components/Button";

export default function Page({ params }) {
  const [userCourses, setUserCourses] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  console.log(params);
  const resolvedParams = use(params);

  useEffect(() => {
    async function fetchUserId() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const res = await fetch("/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const profileData = await res.json();

        setUserCourses(profileData.registeredCourses || []);
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchCourseData() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const res = await fetch(`/api/courses/${resolvedParams.courseId}`, {
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

    fetchUserId();
    fetchCourseData();
  }, [resolvedParams.courseId]);

  useEffect(() => {
    if (userCourses && userCourses.length > 0) {
      const checkRegistration = userCourses.find(
        (course) => course.course_id === resolvedParams.courseId
      );
      /* console.log(
        "checking course",
        typeof resolvedParams.courseId,
        typeof checkRegistration.course_id
      ); */
      if (!checkRegistration) {
        setIsRegistered(false);
      } else if (checkRegistration) {
        setIsRegistered(true);
      }
    }
  }, [userCourses, resolvedParams.courseId]);

  const handleRegister = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token");
      }

      if (!isRegistered) {
        const res = await fetch(`/api/register/${resolvedParams.courseId}`, {
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

        setUserCourses((prev) => [
          ...prev,
          { course_id: resolvedParams.courseId },
        ]);
        setIsRegistered(true);
      } else if (isRegistered) {
        const res = await fetch(`/api/register/${resolvedParams.courseId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Error unregistering");
        }

        setUserCourses((prev) =>
          prev.filter((course) => course.course_id !== resolvedParams.courseId)
        );
        setIsRegistered(false);
      }
    } catch (err) {
      console.error("Error caught:", err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-10 grid grid-cols-2 ">
        <h1 className="col-span-2 text-2xl mb-5">{courseData.title}</h1>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <span>Schedule: </span>
          {courseData.schedule}
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <span>Classroom number: </span>
          {courseData.classroom_number}
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <span>Credit hours: </span>
          {courseData.credit_hours}
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <span>Tuition cost: $</span>
          {courseData.tuition_cost}
        </div>
        <div className="col-span-2 my-5 bg-white rounded-2xl border border-gray-200 p-5">
          <p>{courseData.description}</p>
        </div>
        <div>
          <Button onclick={handleRegister}>
            {isRegistered ? "Unregister" : "Register"}
          </Button>
          <p>{isRegistered ? "(Registered!)" : ""}</p>
        </div>
      </div>
    </div>
  );
}
