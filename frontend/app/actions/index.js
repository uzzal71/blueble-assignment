"use server";

import axios from "axios";

async function registerUser(formData) {
  const user = Object.fromEntries(formData);
  const response = await axios.post(
    "http://localhost:3000/api/auth/signup",
    {
      name: user.name,
      email: user.email,
      password: user.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      credential,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { performLogin, registerUser };
