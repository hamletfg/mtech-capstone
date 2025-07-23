"use client";

import { useState } from "react";
import Button from "../_components/Button";
import Input from "../_components/Input";
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
  const joinFunction = async (e) => {
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
        onSubmit={joinFunction}
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
