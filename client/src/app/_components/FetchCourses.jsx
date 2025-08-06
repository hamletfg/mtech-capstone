"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function FetchCourses({ token }) {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      if (!token) {
        throw new Error("No authentication token provided");
      }
      const res = await fetch("http://localhost:3001/api/courses", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(res);

      try {
        if (!res.ok) {
          throw new Error("Failed to fetch course data");
        }
        const data = await res.json();
        setCourses(data);
      } catch {
        return <div>Failed to fetch course data</div>;
      }
    }

    fetchCourses();
  }, [token]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter((course) =>
        course.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  }, [searchTerm, courses]);

  return (
    <div className="bg-gray-100 min-h-screen  p-10">
      <div className="mb-5 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search courses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-[55%] bg-white p-3 mr-3 rounded-full border border-gray-200"
        />
        <Button onclick={() => setSearchTerm("")}>Clear search</Button>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-4 gap-5">
          {filteredCourses.map((course, index) => {
            return (
              <Link
                href={`/dashboard/courses/${course.course_id}`}
                key={index}
                className="bg-white border border-gray-200 p-5 rounded-2xl overflow-hidden hover:bg-gray-50"
              >
                <div>
                  <div className="mb-2">
                    <span>{course.course_id}</span>
                  </div>
                  <h2 className="mb-2 font-bold">{course.title}</h2>
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
      ) : (
        <p className="text-gray-600 max-w-md mx-auto mb-4">
          No courses match your search for "
          <span className="font-medium">{searchTerm}</span>". Try adjusting your
          search terms.
        </p>
      )}
    </div>
  );
}
