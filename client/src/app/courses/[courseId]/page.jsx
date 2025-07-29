"use client";

import FetchCoursesId from "@/app/_components/FetchCourseId";
import { use } from "react";

export default function Page({ params }) {
  console.log(params);
  const resolvedParams = use(params);
  return <FetchCoursesId courseId={resolvedParams.courseId} />;
}
