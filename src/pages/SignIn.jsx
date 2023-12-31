import React, { useRef, useEffect } from "react";
import { Link as Anchor, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_actions from "../store/actions/users";
import Swal from "sweetalert2";

const { signin } = user_actions;

export default function FormSignIn() {
  const mail = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  async function handleSignIn() {
    let data = {
      mail: mail.current.value,
      password: password.current.value,
    };
    let responseDispatch = dispatch(signin({ data })).then((res) => {
      console.log(res);
      if (res.payload.token) {
        Swal.fire({
          icon: "success",
          title: "Logged in!",
        });
        navigate("/");
      } else if (res.payload.messages) {
        Swal.fire({
          title: "Something went wrong!",
          icon: "error",
          html: res.payload.messages.map((each) => `<p>${each}</p>`).join(""),
        });
      }
    });
  }

  let user = useSelector((store) => store);
  console.log(user);
  return (
    <div className="relative pt-5">
      <div className=" bg-image-url w-full  h-full object-fill">
        <img
          src="https://wallpaperaccess.com/full/6512.jpg"
          alt="japan picture"
        />
      </div>

      <div className="flex justify-center absolute inset-0 ">
        <div className=" w-full max-w-sm pt-[200px] ">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex flex-col items-center justify-center lg:justify-start">
              <p className=" text-md">Sign in with:</p>

              <div className="m-4 ">
                <button type="button">
                  <svg
                    className="w-10 h-10 f  text-gray-100 dark:text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-black">
                O
              </p>
            </div>

            <div className="mb-2">
              <label className="block text-gray-500 text-sm font-bold mb-4">
                Email
              </label>
              <input
                ref={mail}
                type="text"
                name="mail"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              ></input>
            </div>
            <div className="mb-2">
              <label className="block text-gray-500 text-sm font-bold mb-4">
                Password
              </label>
              <input
                ref={password}
                type="password"
                name="password"
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="******************"
              ></input>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-[#4F46E5] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-[#4F46E5] hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-between text-[#4F46E5] text-md font-bold pt-8">
              <p>Don´t you have an account?</p>
              <Anchor to="/signup">
                <button className="inline-block align-baseline font-bold text-sm text-[#4F46E5] hover:text-blue-800">
                  Sign Up
                </button>
              </Anchor>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
