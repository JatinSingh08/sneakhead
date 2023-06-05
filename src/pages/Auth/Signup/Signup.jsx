import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context";
import { toastNotification } from "../../../utils/utlis";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, signupUser } = useAuth();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (userDetails.password !== confirmPassword) {
      setShowPasswordError(true);
      return;
    }
    signupUser(
      userDetails.firstName,
      userDetails.lastName,
      userDetails.email,
      userDetails.password
    );
    navigate("/");
    toastNotification("success", "Successfully Signed In");
  };

  useEffect(() => {
    navigate(location?.state?.from.pathName, { replace: true });
  }, [token]);

  return (
    <form className="h-full mb-20 md:mx-1" onSubmit={submitHandler}>
      <div className="w-96  m-auto mt-24 md:mt-44 h-auto p-4 border rounded-md drop-shadow-sm flex flex-col gap-3">
        <p className="font-semibold text-2xl mb-4">Signup</p>
        <div className="flex gap-0.5">
          <div className="flex flex-col gap-1 w-[50%]">
            <label>First Name</label>
            <input
              className=" border rounded-md p-2 outline-none"
              onChange={(e) =>
                setUserDetails({ ...userDetails, firstName: e.target.value })
              }
              type="text"
              autoComplete="nope"
              placeholder="Enter FirstName"
              required
              value={userDetails.firstName}
            />
          </div>

          <div className="w-[50%] flex flex-col gap-1">
            <label>Last Name</label>
            <input
              className=" border rounded-md p-2 outline-none"
              onChange={(e) =>
                setUserDetails({ ...userDetails, lastName: e.target.value })
              }
              type="text"
              autoComplete="nope"
              placeholder="Enter LastName"
              required
              value={userDetails.lastName}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            className="w-auto border rounded-md p-2 outline-none"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            type="email"
            autoComplete="nope"
            placeholder="Enter Email"
            value={userDetails.email}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            className="w-auto border rounded-md p-2 outline-none"
            type="password"
            id="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            value={userDetails.password}
            required
          />
        </div>
        <div className="relative flex flex-col gap-1">
          <label htmlFor="confirm-password">Confirm Password </label>
          <input
            id="confirm-password"
            type={isPasswordVisible ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="w-auto border rounded-md p-2 outline-none focus:border-blue-500 focus:ring-1"
            required
          />
          <button
            className="absolute inset-y-0 right-0 top-6 flex items-center px-4 text-gray-600"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
        {showPasswordError && (
          <p className="text-red-500 text-sm">Passwords doesn't match</p>
        )}
        <button
          type="submit"
          className="button-theme bg-slate-900 shadow-md text-slate-200"
        >
          Create new account
        </button>
        <div className="text-gray-600 m-auto">
          <p className="text-xl mb-0">
            Already have an account?
            <Link to="/login">
              <span className="text-slate-900 underline ml-2">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Signup;
