import Joi from "joi";

const CreateUpdateAvailabilitySchema = Joi.object().keys({
  start_time: Joi.date().required(),
  end_time: Joi.date().required(),
  day_of_week: Joi.string().required(),
  is_expired: Joi.optional(),
});

const CreateUpdateAvailabilityValidate = (data) => {
  const result = CreateUpdateAvailabilitySchema.validate(data);
  result.value = data;
  return result;
};

export default CreateUpdateAvailabilityValidate;
