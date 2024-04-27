import models from "../models/data-model";

export const createAvailabilityService = async (req) => {
  try {
    const data = req.body;
    const user = req.user;

    // Check if the start time is in the past
    const currentTime = new Date();
    if (new Date(data.start_time) < currentTime) {
      throw new Error("Cannot create availability for past dates");
    }

    // Check if there's an existing slot for the specified period
    const existingSlot = await models.Availability.findOne({
      user: user.id,
      start_time: data.start_time,
      end_time: data.end_time,
      day_of_week: data.day_of_week,
      is_expired: false,
    });
    if (existingSlot) {
      throw new Error(
        "Availability already exists for the specified date and time period"
      );
    }

    let newSlot = new models.Availability({
      user: user.id,
      start_time: data.start_time,
      end_time: data.end_time,
      day_of_week: data.day_of_week,
      is_expired: false,
      create_date: data.create_date || new Date(),
    });

    await newSlot.save();

    return {
      message: "Availability created successfully",
      data: {
        availability: newSlot,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllAvailabilityService = async (data) => {};

export const getAvailabilityService = async (data) => {};

export const updateAvailabilityService = async (data) => {};

export const deleteAvailabilityService = async (data) => {};
