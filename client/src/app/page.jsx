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
