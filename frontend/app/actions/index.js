"use server";

import axios from "axios";
import { redirect } from "next/navigation";

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
        "Content-Type": "application/json", // Specify the content type as JSON
      },
    }
  );

  redirect("/login");
}

async function performLogin(formData) {}

async function addInterestedEvent(eventId, authId) {}

async function addGoingEvent(eventId, user) {}

async function sendEmail(eventId, user) {}

export {
  addGoingEvent,
  addInterestedEvent,
  performLogin,
  registerUser,
  sendEmail,
};
