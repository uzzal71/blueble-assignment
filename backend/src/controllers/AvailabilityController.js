import {
  createAvailabilityService,
  deleteAvailabilityService,
  getAllAvailabilityService,
  getAvailabilityService,
  updateAvailabilityService,
} from "../services/AvailabilityService";
import { ApiFailed, ApiSuccess } from "../utils/ApiResponse";

export const createAvailability = async (req, res) => {
  try {
    const response = await createAvailabilityService(req);
    return res
      .status(201)
      .json(ApiSuccess(response.message, response.data, 201));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const getAllAvailability = async (req, res) => {
  try {
    const response = await getAllAvailabilityService(req);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const getAvailability = async (req, res) => {
  try {
    const response = await getAvailabilityService(req);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const updateAvailability = async (req, res) => {
  try {
    const response = await updateAvailabilityService(req);
    return res
      .status(201)
      .json(ApiSuccess(response.message, response.data, 201));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const deleteAvailability = async (req, res) => {
  try {
    const response = await deleteAvailabilityService(req);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};
