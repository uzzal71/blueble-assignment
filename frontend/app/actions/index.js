"use server";

import { redirect } from "next/navigation";

async function registerUser(formData) {
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
