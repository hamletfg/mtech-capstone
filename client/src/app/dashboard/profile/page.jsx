"use client";

import { useEffect, useState } from "react";
import FetchProfileData from "../../_components/FetchProfileData";

export default function Page() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  return <FetchProfileData token={token} />;
}
