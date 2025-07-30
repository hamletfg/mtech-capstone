"use client";

import { useEffect, useState } from "react";
import Header from "./Header";

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
    <div>
      <Header />
      <div className="p-10 grid grid-cols-2">
        <div className="col-span-2 flex items-center mb-5">
          <div className="h-20 w-20 bg-gray-200 rounded-full border-2 border-gray-400"></div>
          <h1 className=" text-2xl ml-3">
            {profileData.first_name} {profileData.last_name}
          </h1>
        </div>
        <div>
          <h2>Contact Info:</h2>
          <p>{profileData.telephone}</p>
          <p>{profileData.email}</p>
        </div>

        <div>
          <h2>Address Info:</h2>
          <p>{profileData.street}</p>
          <p>{profileData.city}</p>
          <p>{profileData.state}</p>
          <p>{profileData.zip_code}</p>
          <p>{profileData.country}</p>
        </div>

        <div className="col-span-2">
          <h2>{profileData.first_name}'s Courses:</h2>
          <div>
            {
              <ul>
                {Array.isArray(profileData.registeredCourses) &&
                  profileData.registeredCourses.map((course, idx) => (
                    <li
                      key={idx}
                      className="bg-gray-100 rounded-2xl m-3 px-3 py-5"
                    >
                      {course.title}
                    </li>
                  ))}
              </ul>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
