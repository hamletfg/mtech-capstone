"use client";

import Link from "next/link";
import FetchCourses from "../../_components/FetchCourses";
import { useEffect, useState } from "react";

export default function Page() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return <FetchCourses token={token} />;
}
