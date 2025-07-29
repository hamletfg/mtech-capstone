"use client";

import { useEffect, useState } from "react";

export default function FetchProfileData({ token }) {
  const [profileData, setPorfileData] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      if (!token) {
        throw new Error("No authentication token provided");
      }

      const res = await fetch("/api/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      console.log(res);

      try {
        if (!res.ok) {
          throw new Error("Failed to fetch profile data");
        }
        const data = await res.json();
        setPorfileData(data);
      } catch (err) {
        console.error("Error caught:", err);
      }
    }

    fetchProfile();
  }, [token]);

  console.log(profileData);

  return (
    <div className="p-10">
      <h1>
        {profileData.first_name} {profileData.last_name}'s profile
      </h1>
      <h2>Contact Info:</h2>
      <p>{profileData.telephone}</p>
      <p>{profileData.email}</p>

      <h2>Address Info:</h2>
      <p>{profileData.street}</p>
      <p>{profileData.city}</p>
      <p>{profileData.state}</p>
      <p>{profileData.zip_code}</p>
      <p>{profileData.country}</p>

      <h2>{profileData.first_name}'s Courses:</h2>
      <div>
        {
          <ul>
            {Array.isArray(profileData.registeredCourses) &&
              profileData.registeredCourses.map((course, idx) => (
                <li key={idx}>{course.title}</li>
              ))}
          </ul>
        }
      </div>
    </div>
  );
}
