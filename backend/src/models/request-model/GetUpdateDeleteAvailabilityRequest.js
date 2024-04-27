import Joi from "joi";

const GetUpdateDeleteAvailabilitySchema = Joi.object().keys({
  id: Joi.string().required(),
});

const GetUpdateDeleteAvailabilityValidate = (data) => {
  const result = GetUpdateDeleteAvailabilitySchema.validate(data);
  result.value = data;
  return result;
};

export default GetUpdateDeleteAvailabilityValidate;
