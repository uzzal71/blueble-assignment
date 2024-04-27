import { ApiFailed } from "../utils/ApiResponse";

export const PostMethodHandleRequest = async (req, res, next) => {
  const result = validate(req.body);
  const isValid = result.error == null;
  if (isValid) {
    return next();
  }
  const { details } = result.error;
  const message = details[0].message.replace(/"/g, "");
  return res.json(ApiFailed(message));
};

export const handleQueryValidation = (validate) => (req, res, next) => {
  const result = validate(req.query);
  const isValid = result.error == null;
  if (isValid) {
    return next();
  }
  const { details } = result.error;
  const message = details[0].message.replace(/"/g, "");
  return res.json(ApiFailed(message));
};

export const handleParamsValidation = (validate) => (req, res, next) => {
  const result = validate(req.params);
  const isValid = result.error == null;
  if (isValid) {
    return next();
  }
  const { details } = result.error;
  const message = details[0].message.replace(/"/g, "");
  return res.json(ApiFailed(message));
};
