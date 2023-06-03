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

  const submitHandler = (e) => {
    e.preventDefault();
    signupUser(
      userDetails.firstName,
      userDetails.lastName,
      userDetails.email,
      userDetails.password
    );
    navigate('/');
    toastNotification('success', 'Successfully Signed In')
  };

  if (token) {
    console.log("user signed up");
  } else {
    console.log("user not signed up");
  }

  useEffect(() => {
    navigate(location?.state?.from.pathName, { replace: true });
  }, [token]);

  return (
    <form className="h-full mb-20 md:mx-2">
      <div className="w-96  m-auto mt-24 h-auto p-4 border rounded-md drop-shadow-sm flex flex-col gap-3">
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
            type="text"
            autoComplete="nope"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            className="w-auto border rounded-md p-2 outline-none"
            type="password"
            placeholder="Enter Password"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
        </div>
        <button
          type="submit"
          className="button-theme bg-slate-900 shadow-md text-slate-200"
          onClick={submitHandler}
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
