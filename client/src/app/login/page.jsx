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

      nextRouter.push("/courses");
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
