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
    <div className="bg-gray-100 min-h-screen">
      <div className="p-10 grid grid-cols-2">
        <div className="col-span-2 flex items-center mb-5 bg-white rounded-2xl border border-gray-200 p-5">
          <div className="h-20 w-20 bg-gray-200 rounded-full border-2 border-gray-400"></div>
          <h1 className=" text-2xl ml-3">
            {profileData.first_name} {profileData.last_name}
          </h1>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h2 className="text-xl mb-3">Contact Info:</h2>
          <p>Phone: {profileData.telephone}</p>
          <p>Email: {profileData.email}</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5">
          <h2 className="text-xl mb-3">Address Info:</h2>
          <p>{profileData.street}</p>
          <p>{profileData.city}</p>
          <p>{profileData.state}</p>
          <p>{profileData.zip_code}</p>
          <p>{profileData.country}</p>
        </div>

        <div className="col-span-2">
          <div>
            {
              <div className="bg-white rounded-2xl border border-gray-200 p-5">
                <h2 className="text-lg">{profileData.first_name}'s Courses:</h2>
                {Array.isArray(profileData.registeredCourses) &&
                profileData.registeredCourses.length > 0 ? (
                  <div className="mt-5">
                    {profileData.registeredCourses.map((course, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-lg p-4 border border-gray-200"
                      >
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gray-400 rounded-full mr-4"></div>
                          <span className="text-gray-700 font-medium">
                            {course.title}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-400 text-2xl">📚</span>
                    </div>
                    <p className="text-gray-500">No courses registered yet</p>
                  </div>
                )}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
