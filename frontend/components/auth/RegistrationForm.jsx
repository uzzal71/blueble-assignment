"use client";

import { registerUser } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegistrationForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const result = await registerUser(formData);

      if (result.status) {
        router.push("/login");
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <div className="my-2 text-red-500">{error}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationForm;
