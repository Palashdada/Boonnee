import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

import logo from "../../assets/ChatGPT Image Dec 30, 2025, 02_25_19 AM.png";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, clearMessage } from "../../store/reduccers/authReduccers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const dispach = useDispatch();
  const [state, setState] = useState({
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
    dispach(admin_login(state));
  };
  const overWriteStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
  };
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispach(clearMessage());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispach(clearMessage());
      navigate("/");
    }
  }, [errorMessage, successMessage, dispach]);
  return (
    <div className="min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center">
      <div className="w-[350px] text-[#d0d2d6] p-2">
        <div className="bg-[#283046] p-4 rounded-md">
          <div className="h-[150px] flex justify-center items-center">
            <div className="w-full h-[200px]">
              <img className="w-full h-full" src={logo} alt="" />
            </div>
          </div>

          <form onSubmit={submit}>
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
            <div className=" flex flex-col w-full gap-1 mb-5">
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

            <button
              disabled={loader ? true : false}
              className="bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-b-md px-7 py-2 mb-3 overflow-hidden "
            >
              {loader ? (
                <PropagateLoader cssOverride={overWriteStyle} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
