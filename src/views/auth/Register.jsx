import React, { useState } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const inputeHandel = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <h2>Welcome to Boonnee</h2>
          <p className="text-sm mb-3">
            Please Register to your account and start your business{" "}
          </p>
          <form onSubmit={submit}>
            <div className=" flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                onChange={inputeHandel}
                value={state.name}
                className="px-3 py-2  outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="name"
                placeholder="name"
                id="name"
                required
              />
            </div>
            <div className=" flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Email</label>
              <input
                onChange={inputeHandel}
                value={state.email}
                className="px-3 py-2  outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="email"
                name="email"
                placeholder="Email"
                id="Email"
                required
              />
            </div>
            <div className=" flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Password</label>
              <input
                onChange={inputeHandel}
                value={state.password}
                className="px-3 py-2  outline-none border border-slate-700 bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden"
                type="password"
                name="password"
                placeholder="Password"
                id="Password"
                required
              />
            </div>
            <div className=" flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="Checkbox"
                id="Checkbox"
                required
              />
              <label htmlFor="Checkbox">
                I agree to privacy policy & terms{" "}
              </label>
            </div>
            <button className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-b-md px-7 py-2 mb-3 overflow-hidden ">
              Sing Up
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account ?{" "}
                <Link to={"/login"}>Sign In here</Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-stone-700 h-[1px] "></div>
              <span className="pb-1">Or</span>
              <div className="w-[45%] bg-stone-700 h-[1px] "></div>
            </div>
            <div className="flex justify-center items-center gap-3 ">
              <div className=" w-[35px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
              <div className=" w-[35px] h-[35px] flex rounded-md bg-indigo-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FiFacebook />
                </span>
              </div>
              <div className=" w-[35px] h-[35px] flex rounded-md bg-cyan-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <CiTwitter />
                </span>
              </div>
              <div className=" w-[35px] h-[35px] flex rounded-md bg-purple-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <AiOutlineGithub />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
