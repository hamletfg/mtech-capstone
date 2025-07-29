"use client";

import FetchCoursesId from "@/app/_components/FetchCourseId";
import { use, useEffect, useState } from "react";

export default function Page({ params }) {
  const [userId, setUserId] = useState(null);
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
        console.log(profileData.user_id);
        setUserId(profileData.user_id);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUserId();
  }, [userId]);

  return <FetchCoursesId courseId={resolvedParams.courseId} userId={userId} />;
}
