import CreateUpdateAvailabilityValidate from "./CreateUpdateAvailabilityRequest";
import GetUpdateDeleteAvailabilityValidate from "./GetUpdateDeleteAvailabilityRequest";
import LoginValidate from "./LoginRequest";
import SignupValidate from "./SignupRequest";

const validators = {
  SignupValidation: SignupValidate,
  LoginValidation: LoginValidate,
  CreateUpdateAvailabilityValidation: CreateUpdateAvailabilityValidate,
  GetUpdateDeleteAvailabilityValication: GetUpdateDeleteAvailabilityValidate,
};

export default validators;
