'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FetchCourses({ token }) {
  const [course, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      if (!token) {
        throw new Error('No authentication token provided');
      }
      const res = await fetch('/api/courses', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(res);

      try {
        if (!res.ok) {
          throw new Error('Failed to fetch course data');
        }
        const data = await res.json();
        setCourses(data);
      } catch {
        return <div>Failed to fetch course data</div>;
      }
    }

    fetchCourses();
  }, [token]);

  return (
    <div className='grid grid-cols-4 gap-8 p-10'>
      {course.map((course, index) => {
        return (
          <Link
            href={`/courses/${course.course_id}`}
            key={index}
            className='border border-gray-500 p-5 rounded-sm overflow-hidden'
          >
            <div>
              <div className='mb-2'>
                <span>{course.course_id}</span>
              </div>
              <div className='mb-2'>{course.title}</div>
              <div>
                <span className='text-sm  line-clamp-3'>
                  {course.description}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
