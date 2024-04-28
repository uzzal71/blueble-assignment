import { registerUser } from "@/app/actions";

const RegistrationForm = () => {
  return (
    <form className="login-form" action={registerUser}>
      <div>
        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

      <button
        type="submit"
        className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
