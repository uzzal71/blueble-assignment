import Joi from "joi";

const SignupSchema = Joi.object().keys({
  name: Joi.string().required().min(3).max(20),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  status: Joi.optional(),
  create_date: Joi.optional(),
});

const SignupValidate = (data) => {
  const result = SignupSchema.validate(data);
  result.value = data;
  return result;
};

export default SignupValidate;
