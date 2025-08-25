This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
4. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

## Additional Info

# Directory Structure
```
client/
  public/
    file.svg
    globe.svg
    next.svg
    vercel.svg
    window.svg
  src/
    app/
      _components/
        Button.jsx
        FetchCourseId.jsx
        FetchCourses.jsx
        FetchProfileData.jsx
        Input.jsx
      dashboard/
        courses/
          [courseId]/
            page.jsx
          page.jsx
        profile/
          page.jsx
        layout.jsx
        page.jsx
      hooks/
        useLocalStorage.js
      join/
        page.jsx
      login/
        page.jsx
      globals.css
      layout.js
      page.jsx
  .gitignore
  eslint.config.mjs
  jsconfig.json
  next.config.mjs
  package.json
  postcss.config.mjs
  README.md
server/
  db/
    db.js
  middleware/
    auth.js
    validation.js
  routes/
    courses.js
    join.js
    login.js
    profile.js
    register.js
    registrations.js
    test.http
  tests/
    auth/
      join.http
      login.http
    courses/
      courses.http
    profile/
      profile.http
    registrations/
      admin.http
      student.http
    users/
      users.http
  logger.js
  package.json
  server.js
.gitignore
package.json
```

# Files

## File: client/public/file.svg
````
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: client/public/globe.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: client/public/next.svg
````
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: client/public/vercel.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: client/public/window.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: client/src/app/dashboard/courses/page.jsx
````javascript
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
````

## File: client/src/app/dashboard/profile/page.jsx
````javascript
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
````

## File: client/src/app/hooks/useLocalStorage.js
````javascript
import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  let savedValue;
  if (typeof window !== "undefined") {
    savedValue = localStorage.getItem(key);
  }
  try {
    savedValue = JSON.parse(savedValue);
  } catch {}

  const [state, setState] = useState(savedValue || initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return [state, setState];
}
````

## File: client/src/app/layout.js
````javascript
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
````

## File: client/src/app/page.jsx
````javascript
"use client";

import Link from "next/link";
import Button from "./_components/Button";
import Input from "./_components/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const nextRouter = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("token", data.token);
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);

      nextRouter.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-500 min-h-screen flex justify-center items-center">
      <div className="px-30 py-10 flex flex-col justfity-center items-center bg-white/20 rounded-2xl border-2 border-gray-400">
        <form
          onSubmit={handleLogin}
          className="w-fit mx-auto flex flex-col justfity-center items-center"
        >
          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}
          <div className="mb-5">
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit">Login</Button>
        </form>
        <div className="mt-5">
          <p>
            Don't have an account? <Link href="/join">Join here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
````

## File: client/eslint.config.mjs
````
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;
````

## File: client/jsconfig.json
````json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
````

## File: client/next.config.mjs
````
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // intercepts /api/*
        destination: "http://localhost:3001/api/:path*", // forwards to backend
      },
    ];
  },
};

export default nextConfig;
````

## File: client/postcss.config.mjs
````
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
````

## File: server/routes/registrations.js
````javascript
const express = require('express');
const registrationsRouter = express.Router();
const db = require('../db/db');
const logger = require('../logger');
const { verifyToken } = require('../middleware/auth');

// Protected route to get user's registrations
registrationsRouter.get('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id; // Get user ID from verified token

    const result = await db.query(
      'SELECT * FROM registrations WHERE user_id = $1',
      [userId]
    );

    logger.info(`Registrations retrieved successfully for user ${userId}`);
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = registrationsRouter;
````

## File: server/tests/auth/join.http
````
# Registration/signup tests

@baseUrl = http://localhost:3001/api

POST {{baseUrl}}/join
Content-Type: application/json

{
    "email": "student@example.com",
    "password": "securePassword123",
    "firstName": "John",
    "lastName": "Doe",
    "telephone": "123-456-7890",
    "street": "123 Campus Drive",
    "city": "College Town",
    "state": "UT",
    "zip_code": "84123",
    "country": "USA"
}

###
GET {{baseUrl}}/admin-tools/users
````

## File: server/tests/auth/login.http
````
# Login/authentication tests

@baseUrl = http://localhost:3001/api

### Login as student
POST {{baseUrl}}/login
Content-Type: application/json

{
    "email": "student@example.com",
    "password": "securePassword123"
}

### Login as admin
POST {{baseUrl}}/login
Content-Type: application/json

{
    "email": "admin@example.com",
    "password": "adminPassword123"
}
````

## File: server/tests/profile/profile.http
````
### Test Set 1: User with registered courses
### 1. Login as user with courses
POST http://localhost:3001/api/login
Content-Type: application/json

{
    "email": "student@example.com",
    "password": "securePassword123"
}

### 2. Get profile (should show user info WITH courses)
GET http://localhost:3001/api/profile
Authorization: Bearer {{token_from_login}}

### Test Set 2: User without any courses
### 3. Login as new user without courses
POST http://localhost:3001/api/login
Content-Type: application/json

{
    "email": "newstudent@example.com",
    "password": "password123"
}

### 4. Get profile (should show user info with empty courses array)
GET http://localhost:3001/api/profile
Authorization: Bearer {{token_from_login}}

### Test Set 3: Error cases
### 5. Get profile without token (should fail)
GET http://localhost:3001/api/profile

### 6. Get profile with invalid token (should fail)
GET http://localhost:3001/api/profile
Authorization: Bearer invalid_token_here
````

## File: server/tests/registrations/admin.http
````
# Admin registration operations

@baseUrl = http://localhost:3001/api
@authToken = {{$dotenv adminToken}}

### Get all registrations (admin only)
GET {{baseUrl}}/admin-tools/registrations/courses
Authorization: Bearer {{authToken}}
Content-Type: application/json

{
    "course_id": "CSCI-2001"
}
````

## File: server/tests/users/users.http
````
# User management endpoints
````

## File: server/logger.js
````javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'http',
  transports: [
    new winston.transports.Console({
      level: 'error',
    }),
    new winston.transports.File({
      filename: 'logfile.log',
      level: 'info',
    }),
  ],
});

module.exports = logger;
````

## File: client/src/app/dashboard/courses/[courseId]/page.jsx
````javascript
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
````

## File: client/src/app/dashboard/layout.jsx
````javascript
import Button from "../_components/Button";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <div className="bg-gray-300 flex flex-col w-fit min-h-screen p-3">
        <Link
          href="/dashboard"
          className="hover:cursor-pointer hover:bg-gray-100 p-3 my-3 flex rounded-md"
        >
          <span>&#128187;</span>
          <span>Dashboard</span>
        </Link>
        <Link
          href="/dashboard/courses"
          className="hover:cursor-pointer hover:bg-gray-100 p-3 mb-3 flex rounded-md"
        >
          <span>&#128193;</span>
          <span>Courses</span>
        </Link>
        <Link
          href="/dashboard/profile"
          className="hover:cursor-pointer hover:bg-gray-100 p-3 mb-3 flex rounded-md"
        >
          <span>&#128100;</span>
          <span>Profile</span>
        </Link>
        <div className="hover:cursor-pointer hover:bg-gray-100 p-3 mb-3 flex rounded-md">
          <span>&#8618; Logout</span>
        </div>
      </div>
      <div className="w-[100%]">{children}</div>
    </div>
  );
}
````

## File: client/src/app/dashboard/page.jsx
````javascript
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-3 gap-5 text-xl text-center">
        <Link href="/dashboard/courses">
          <div className="bg-white rounded-2xl border border-gray-200 p-10">
            <span>&#128193;</span>
            <span>Courses</span>
          </div>
        </Link>
        <Link href="/dashboard/profile">
          <div className="bg-white rounded-2xl border border-gray-200 p-10">
            <span>&#128100;</span>
            <span>Profile</span>
          </div>
        </Link>
        <Link href="/dashboard">
          <div className="bg-white rounded-2xl border border-gray-200 p-10">
            <span>&#128205;</span>
            <span>Placeholder</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
````

## File: client/src/app/globals.css
````css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

/* * {
  border: 1px solid black;
} */
````

## File: client/package.json
````json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.4.2"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.4.2",
    "@eslint/eslintrc": "^3"
  }
}
````

## File: client/README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: server/routes/profile.js
````javascript
const express = require('express');
const profileRouter = express.Router();
const db = require('../db/db');
const logger = require('../logger');
const { verifyToken } = require('../middleware/auth');

profileRouter.get('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;

    const userQuery = `
      SELECT 
        u.user_id,
        u.email,
        u.first_name,
        u.last_name,
        u.telephone,
        a.street,
        a.city,
        a.state,
        a.zip_code,
        a.country
      FROM users u
      JOIN addresses a ON u.address_id = a.address_id
      WHERE u.user_id = $1
    `;

    const coursesQuery = `
      SELECT 
        c.course_id,
        c.title,
        c.description,
        c.schedule,
        c.classroom_number,
        c.credit_hours,
        r.registered_at
      FROM registrations r
      JOIN courses c ON r.course_id = c.course_id
      WHERE r.user_id = $1
    `;

    // Get user info first
    const userResult = await db.query(userQuery, [userId]);

    if (userResult.rows.length === 0) {
      logger.error(`No user found with ID ${userId}`);
      return res.status(404).json({ error: 'User info not found' });
    }

    // Get courses if user exists
    const coursesResult = await db.query(coursesQuery, [userId]);

    // Combine user info with courses (even if no courses found)
    const profile = {
      ...userResult.rows[0],
      registeredCourses: coursesResult.rows, // Will be empty array if no courses
    };

    logger.info(`Profile retrieved successfully for user ${userId}`);
    res.json(profile);
  } catch (err) {
    logger.error('Database query error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = profileRouter;
````

## File: server/tests/registrations/student.http
````
### 1. Login first
POST http://localhost:3001/api/login
Content-Type: application/json

{
    "email": "student@example.com",
    "password": "securePassword123"
}

### 2. Register for a course (with auth)
POST http://localhost:3001/api/register
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwMTEsImVtYWlsIjoic3R1ZGVudEBleGFtcGxlLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3NTM4ODY4MDQsImV4cCI6MTc1MzkwMTIwNH0.4Tyj2asOoJbNga-rRKMtZ2rP6yO9p4T8CVErLCLWyPo
Content-Type: application/json

{
    "courseId": "CSCI-2001"
}

### 3. Try to register without auth (should fail)
POST http://localhost:3001/api/register
Content-Type: application/json

{
    "courseId": "CSCI-2001"
}

### 4. Unregister from a course (with auth)
DELETE http://localhost:3001/api/register/CSCI-2001
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwMTEsImVtYWlsIjoic3R1ZGVudEBleGFtcGxlLmNvbSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3NTM4ODY4MDQsImV4cCI6MTc1MzkwMTIwNH0.4Tyj2asOoJbNga-rRKMtZ2rP6yO9p4T8CVErLCLWyPo

### 5. Try to unregister without auth (should fail)
DELETE http://localhost:3001/api/register/CSCI-2001
````

## File: client/src/app/_components/Button.jsx
````javascript
export default function Button({ type, onclick, disabled, children }) {
  return (
    <button
      type={type}
      className="bg-gray-700 py-3 px-5 rounded-lg w-fit text-white hover:cursor-pointer"
      onClick={onclick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
````

## File: client/src/app/_components/FetchCourseId.jsx
````javascript
"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

export default function FetchCoursesId({ courseId, userId }) {
  const [courseData, setCourseData] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);
  //const [id, setId] = useState(null);

  useEffect(() => {
    async function fetchCourseData() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No authentication token found");
        }

        const res = await fetch(`/api/courses/${courseId}`, {
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

    fetchCourseData();
  }, [courseId]);

  const handleRegister = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token");
      }

      const res = await fetch(`/api/register/${courseId}`, {
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
      console.log("REGISTERED", courseId, userId, data);
    } catch (err) {
      console.error("Error caught:", err);
    }
  };

  return (
    <div className="p-10">
      <h1>{courseData.title}</h1>
      <div>
        <span>Schedule: </span>
        {courseData.schedule}
      </div>
      <div>
        <span>Classroom number: </span>
        {courseData.classroom_number}
      </div>
      <div>
        <span>Credit hours: </span>
        {courseData.credit_hours}
      </div>
      <div>
        <span>Tuition cost: </span>
        {courseData.tuition_cost}
      </div>
      <Button onclick={handleRegister}>Register</Button>
    </div>
  );
}
````

## File: client/src/app/_components/FetchCourses.jsx
````javascript
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
````

## File: client/src/app/join/page.jsx
````javascript
"use client";

import { useState } from "react";
import Button from "../_components/Button";
import Input from "../_components/Input";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    telephone: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleJoin = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      const res = await fetch("http://localhost:3001/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log(res);
      if (res.ok) {
        const result = await res.json();
        console.log("Success", result);
      } else {
        console.log("Error", res.status);
      }
    } catch (err) {
      console.log("Network error", err);
    }
  };

  return (
    <div className="p-5">
      <form
        onSubmit={handleJoin}
        className="flex flex-col justify-center items-center gap-5 mx-auto"
      >
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={handleInputChange}
        />
        <Input
          type="tel"
          id="telephone"
          name="telephone"
          placeholder="0001112222"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          id="street"
          name="street"
          placeholder="123 Example Road"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          id="city"
          name="city"
          placeholder="Example City"
          onChange={handleInputChange}
        />
        <Input
          type="text"
          id="state"
          name="state"
          placeholder="NY"
          onChange={handleInputChange}
        />
        <Input
          type="number"
          id="zip_code"
          name="zip_code"
          placeholder="zip code"
          onChange={handleInputChange}
        />
        <select
          id="country"
          name="country"
          className="border py-2 px-4 rounded-lg"
          onChange={handleInputChange}
        >
          <option>Select country</option>
          <option>USA</option>
        </select>

        <Button type="submit">Join</Button>
      </form>
    </div>
  );
}
````

## File: client/src/app/login/page.jsx
````javascript
"use client";

import Link from "next/link";
import Button from "../_components/Button";
import Input from "../_components/Input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const nextRouter = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("token", data.token);
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);

      nextRouter.push("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-10">
      <form
        onSubmit={handleLogin}
        className="w-fit mx-auto flex flex-col justfity-center items-center"
      >
        {error && (
          <div className="text-red-500 text-sm text-center">{error}</div>
        )}
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
````

## File: client/.gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: server/db/db.js
````javascript
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});

// Test the connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Successfully connected to PostgreSQL database");
  }
});

module.exports = {
  pool,
  query: (text, params) => pool.query(text, params),
};
````

## File: server/middleware/auth.js
````javascript
const jwt = require('jsonwebtoken');
const logger = require('../logger');

const auth = {
  // Verify JWT token
  verifyToken: (req, res, next) => {
    try {
      // Get token from header
      const token = req.headers.authorization?.split(' ')[1];

      if (!token) {
        return res
          .status(401)
          .json({ error: 'Access denied. No token provided' });
      }

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      logger.error('JWT verification failed', err);
      res.status(401).json({ error: 'Invalid token' });
    }
  },

  // Verify admin role
  verifyAdmin: (req, res, next) => {
    if (!req.user.isAdmin) {
      return res
        .status(403)
        .json({ error: 'Access denied. Admin rights required' });
    }
    next();
  },

  // Generate JWT token
  generateToken: (user) => {
    return jwt.sign(
      {
        userId: user.user_id,
        email: user.email,
        isAdmin: user.is_admin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '4h' }
    );
  },
};

module.exports = auth;
````

## File: server/tests/courses/courses.http
````
# Course-related endpoints

### 1. Login to get token (student)
POST http://localhost:3001/api/login
Content-Type: application/json

{
    "email": "student@example.com",
    "password": "securePassword123"
}

### 2. Get all courses (with auth)
GET http://localhost:3001/api/courses
Authorization: Bearer {token}

### 3. Get specific course (with auth)
GET http://localhost:3001/api/courses/CSCI-2001
Authorization: Bearer {{token_from_login}}

### 4. Get courses without auth (should fail)
GET http://localhost:3001/api/courses

### 5. Get specific course without auth (should fail)
GET http://localhost:3001/api/courses/CSCI-2001
````

## File: .gitignore
````
node_modules
logs
*.log
.vscode
.env
````

## File: client/src/app/_components/FetchProfileData.jsx
````javascript
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
````

## File: client/src/app/_components/Input.jsx
````javascript
export default function Input({
  type,
  id,
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border py-2 px-4 rounded-lg"
        required
      />
    </div>
  );
}
````

## File: server/middleware/validation.js
````javascript
const { body, validationResult } = require('express-validator');

const validateRegistration = [
  body('email').isEmail().normalizeEmail().withMessage('Invalid email format'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  body('firstName').notEmpty().trim().withMessage('First name is required'),
  body('lastName').notEmpty().trim().withMessage('Last name is required'),
  body('telephone').notEmpty().withMessage('Telephone is required'),
  body('street').notEmpty().trim().withMessage('Street is required'),
  body('city').notEmpty().trim().withMessage('City is required'),
  body('state').notEmpty().trim().withMessage('State is required'),
  body('zip_code').notEmpty().trim().withMessage('Zip code is required'),
  body('country').notEmpty().trim().withMessage('Country is required'),
];

const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
];

// Middleware to check for validation errors
const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateRegistration,
  validateLogin,
  checkValidationErrors,
};
````

## File: server/routes/register.js
````javascript
// In routes/register.js
const express = require("express");
const registerRouter = express.Router();
const db = require("../db/db");
const logger = require("../logger");
const { verifyToken } = require("../middleware/auth");

// Register for a course
registerRouter.post("/:courseId", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { courseId } = req.params;

    // Check if course exists and has capacity
    const courseCheck = await db.query(
      "SELECT maximum_capacity FROM courses WHERE course_id = $1",
      [courseId]
    );

    if (courseCheck.rows.length === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Check current registration count
    const currentCount = await db.query(
      "SELECT COUNT(*) FROM registrations WHERE course_id = $1",
      [courseId]
    );

    if (currentCount.rows[0].count >= courseCheck.rows[0].maximum_capacity) {
      return res.status(400).json({ error: "Course is full" });
    }

    // Check if already registered
    const existingReg = await db.query(
      "SELECT * FROM registrations WHERE user_id = $1 AND course_id = $2",
      [userId, courseId]
    );

    if (existingReg.rows.length > 0) {
      return res
        .status(400)
        .json({ error: "Already registered for this course" });
    }

    // Register for course
    await db.query(
      "INSERT INTO registrations (user_id, course_id) VALUES ($1, $2)",
      [userId, courseId]
    );

    logger.info(`User ${userId} registered for course ${courseId}`);
    res.status(201).json({ message: "Successfully registered for course" });
  } catch (err) {
    logger.error("Registration error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Unregister from a course
registerRouter.delete("/:courseId", verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { courseId } = req.params;

    const result = await db.query(
      "DELETE FROM registrations WHERE user_id = $1 AND course_id = $2",
      [userId, courseId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Registration not found" });
    }

    logger.info(`User ${userId} unregistered from course ${courseId}`);
    res.json({ message: "Successfully unregistered from course" });
  } catch (err) {
    logger.error("Unregistration error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = registerRouter;
````

## File: server/routes/join.js
````javascript
const express = require("express");
const joinRouter = express.Router();
const db = require("../db/db");
const bcrypt = require("bcrypt");
const {
  validateRegistration,
  checkValidationErrors,
} = require("../middleware/validation");

const SALT_ROUNDS = 10;

// Registration route with validation middleware
joinRouter.post(
  "/",
  validateRegistration,
  checkValidationErrors,
  async (req, res) => {
    // Get a client from the connection pool
    console.log("endpoint hit");
    const client = await db.pool.connect();

    try {
      // Start transaction
      await client.query("BEGIN");

      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);

      // 1. Create address first
      const addressResult = await client.query(
        `INSERT INTO addresses (street, city, state, zip_code, country)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING address_id`,
        [
          req.body.street,
          req.body.city,
          req.body.state,
          req.body.zip_code,
          req.body.country,
        ]
      );

      const addressId = addressResult.rows[0].address_id;

      // 2. Create user with returned address_id
      const userResult = await client.query(
        `INSERT INTO users (
        email,
        password,
        first_name,
        last_name,
        telephone,
        is_admin,
        address_id
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING user_id`,
        [
          req.body.email,
          hashedPassword,
          req.body.firstName,
          req.body.lastName,
          req.body.telephone,
          false, // Default is_admin to false for new registrations
          addressId,
        ]
      );

      // Commit transaction
      await client.query("COMMIT");

      // Send success response
      res.status(201).json({
        message: "Registration successful",
        userId: userResult.rows[0].user_id,
        addressId: addressId,
      });
    } catch (err) {
      // Rollback transaction on error
      await client.query("ROLLBACK");
      console.error("Transaction Error:", err);

      // Handle specific error cases
      if (err.constraint === "users_email_key") {
        res.status(409).json({
          error: "Email already exists",
        });
      } else {
        res.status(500).json({
          error: "Registration failed",
          details:
            process.env.NODE_ENV === "development" ? err.message : undefined,
        });
      }
    } finally {
      // Always release the client back to the pool
      client.release();
    }
  }
);

module.exports = joinRouter;
````

## File: server/routes/courses.js
````javascript
const express = require('express');
const coursesRouter = express.Router();
const db = require('../db/db');
const logger = require('../logger');
const { verifyToken } = require('../middleware/auth');

// Get all courses - any authenticated user can view courses
coursesRouter.get('/', verifyToken, async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM courses');
    logger.info('Courses retrieved successfully');
    res.json(rows);
  } catch (err) {
    logger.error('Database query error:', err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get specific course - any authenticated user
coursesRouter.get('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query(
      'SELECT * FROM courses WHERE course_id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Course not found' });
    }

    logger.info(`Course ${id} retrieved successfully`);
    res.json(result.rows[0]);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = coursesRouter;
````

## File: server/routes/login.js
````javascript
const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const loginRouter = express.Router();
const db = require("../db/db");
const logger = require("../logger");
const { generateToken } = require("../middleware/auth");

// Validation middleware
const validateLogin = [
  body("email").isEmail().normalizeEmail(),
  body("password").notEmpty(),
];

// Route should be just '/' since '/api/login' is set in server.js
loginRouter.post("/", validateLogin, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find user
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = generateToken(user);

    // Send response with token
    res.json({
      token,
      user: {
        id: user.user_id,
        email: user.email,
        isAdmin: user.is_admin,
        firstName: user.first_name,
        lastName: user.last_name,
      },
    });
  } catch (err) {
    logger.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = loginRouter;
````

## File: package.json
````json
{
  "name": "mtech-capstone",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "client": "cd client && npm start",
    "build": "cd server && npm i && cd ../client && npm i && npm run build",
    "start": "node server/server.js",
    "install": "cd server && npm i && cd ../client && npm i",
    "dev:server": "cd server && npm run dev"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/hamletfg/mtech-capstone.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/hamletfg/mtech-capstone/issues"
  },
  "homepage": "https://github.com/hamletfg/mtech-capstone#readme",
  "description": "",
  "dependencies": {
    "vite": "^7.0.3"
  }
}
````

## File: server/package.json
````json
{
  "name": "server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcrypt": "^6.0.0",
    "cors": "^2.8.5",
    "dotenv": "^17.2.0",
    "express": "^5.1.0",
    "express-jwt": "^8.5.1",
    "express-validator": "^7.2.1",
    "jsonwebtoken": "^9.0.2",
    "morgan": "^1.10.0",
    "pg": "^8.16.3",
    "winston": "^3.17.0"
  }
}
````

## File: server/routes/test.http
````
GET http://localhost:3001/api/admin-tools/users

###

GET http://localhost:3001/api/courses

###

GET http://localhost:3001/api/courses/CSCI-2001

###

GET http://localhost:3001/api/addresses

###

GET http://localhost:3001/api/registrations

###

GET http://localhost:3001/api/registrations/2007

###

DELETE http://localhost:3001/api/registrations/2008/unregister
Content-Type: application/json

{
    "course_id": "CSCI-2001"
}

###

GET http://localhost:3001/api/admin-tools/registrations/courses
Content-Type: application/json

{
    "course_id": "CSCI-2001"
}

###

DELETE http://localhost:3001/api/admin-tools/registrations/remove-user
Content-Type: application/json

{
    "user_id": 2007,
    "course_id": "CSCI-2001"
}

###

POST http://localhost:3001/api/users/2011/registration
Content-Type: application/json

{
    "course_id": "CSCI-2013"
}

### Create account

POST http://localhost:3001/api/join
Content-Type: application/json

{
    "email": "henry@jekyll.com",
    "password": "hj7works",
    "firstName": "Henry",
    "lastName": "Jekyll",
    "telephone": "123-456-7899",
    "street": "Carey St",
    "city": "London",
    "state": "PA",
    "zip_code": "81230",
    "country": "USA"
}

###

### 1. Login to get a token
POST http://localhost:3001/api/login
Content-Type: application/json

{
    "email": "student@example.com",
    "password": "securePassword123"
}

### 2. Test protected registrations endpoint with valid token
GET http://localhost:3001/api/registrations
Authorization: Bearer your_token_here

### 3. Test without token (should fail)
GET http://localhost:3001/api/registrations

### 4. Test with invalid token (should fail)
GET http://localhost:3001/api/registrations
Authorization: Bearer invalid_token_here
````

## File: server/server.js
````javascript
// server/server.js

const express = require('express');
const morgan = require('morgan');
const winston = require('winston');
const db = require('./db/db'); // Import db connection
const coursesRouter = require('./routes/courses'); // Courses route
const joinRouter = require('./routes/join');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const profileRouter = require('./routes/profile');
const registrationsRouter = require('./routes/registrations');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  })
);

const logger = winston.createLogger({
  level: 'http',
  transports: [
    new winston.transports.Console({ level: 'error' }),
    new winston.transports.File({ filename: 'logfile.log', level: 'info' }),
  ],
});

// Existing middleware
app.use(express.json());
app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
  })
);

// Routes
app.use('/api/courses', coursesRouter);
app.use('/api/join', joinRouter);
app.use('/api/login', loginRouter);
app.use('/api/registrations', registrationsRouter);
app.use('/api/profile', profileRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/join', joinRouter);
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);
app.use('/api/registrations', registrationsRouter);

app.get('/api/admin-tools/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    logger.info('Users retrieved successfully');
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/addresses', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM addresses');
    logger.info('Addresses retrieved successfully');
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/registrations', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM registrations');
    logger.info('Registrations retrieved successfully');
    res.json(result.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//ENDPOINTS THAT NEED TO BE BROKEN OUT INTO ROUTES

//user can view their enrollments (this goes through users profile)
app.get('/api/registrations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const userCourses = await db.query(
      `SELECT * FROM registrations WHERE user_id = $1`,
      [id]
    );
    res.json(userCourses.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//user can drop a specific course (this goes through users profile)
app.delete('/api/registrations/:id/unregister', async (req, res) => {
  const { id } = req.params;
  const courseId = req.body.course_id;
  try {
    const unregisterUser = await db.query(
      `DELETE FROM registrations WHERE user_id = $1 AND course_id = $2`,
      [id, courseId]
    );
    res.json({
      message: `User ${id} unregistered from course ${courseId}`,
      info: unregisterUser,
    });
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//admin user can view everyone registered in a specific course (admin registration viewing)
app.get('/api/admin-tools/registrations/courses', async (req, res) => {
  const courseId = req.body.course_id;
  try {
    const viewStudents = await db.query(
      `SELECT * FROM registrations WHERE course_id = $1`,
      [courseId]
    );
    res.json(viewStudents.rows);
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//admin user can remove a student from a course (admin registration viewing)
app.delete('/api/admin-tools/registrations/remove-user', async (req, res) => {
  const userId = req.body.user_id;
  const courseId = req.body.course_id;
  try {
    const removeStudent = await db.query(
      `DELETE FROM registrations WHERE user_id = $1 AND course_id = $2`,
      [userId, courseId]
    );
    res.json({
      message: `Admin removed user ${userId} from course ${courseId}`,
      info: removeStudent,
    });
  } catch (err) {
    logger.error('Database query error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
````
