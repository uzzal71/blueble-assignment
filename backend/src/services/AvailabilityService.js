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

export const getAllAvailabilityService = async (req) => {
  try {
    const user = req.user;
    const availability = await models.Availability.find({
      user: user.id,
    });

    return {
      message: "Availability retrieved successfully",
      data: {
        availabilities: availability,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAvailabilityService = async (req) => {
  try {
    const user = req.user;
    const availability = await models.Availability.findOne({
      user: user.id,
      _id: req.params.id,
    });

    return {
      message: "Availability retrieved successfully",
      data: {
        availability: availability,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateAvailabilityService = async (req) => {
  try {
    const user = req.user;
    const data = req.body;

    // Find the availability to update
    let availability = await models.Availability.findOne({
      user: user.id,
      _id: req.params.id,
    });

    if (!availability) {
      throw new Error("Availability not found");
    }

    // Update the availability with the new data
    availability.set({
      start_time: data.start_time,
      end_time: data.end_time,
      day_of_week: data.day_of_week,
    });

    await availability.save();

    return {
      message: "Availability updated successfully",
      data: {
        availability: availability,
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteAvailabilityService = async (req) => {
  try {
    const user = req.user;

    // Find the availability to delete
    let availability = await models.Availability.findOne({
      user: user.id,
      _id: req.params.id,
    });

    if (!availability) {
      throw new Error("Availability not found");
    }

    // Delete the availability
    await availability.remove();

    return {
      message: "Availability deleted successfully",
      data: null,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
