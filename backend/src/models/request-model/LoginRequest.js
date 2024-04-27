import Joi from "joi";

const LoginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const LoginValidate = (data) => {
  const result = LoginSchema.validate(data);
  result.value = data;
  return result;
};

export default LoginValidate;
