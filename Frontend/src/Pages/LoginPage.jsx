import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../store/useAuth";
import roboImage from "../assets/robo.png";

const LoginPage = () => {
  const { handleSubmit, register } = useForm();
  const { loginUser, isLogingIn } = useAuth();

  const loginForm = (data) => {
    loginUser(data);
  };

  return (
    <div className="w-full h-screen flex justify-center  items-center bg-[url(./assets/bg.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex rounded-4xl shadow-[10px_10px_30px_#000]  p-10 backdrop-blur-xs">
        <img className="h-100" src={roboImage} alt="" />

        <form
          action={handleSubmit(loginForm)}
          className="text-white flex flex-col justify-center gap-4 p-4 "
        >
          <div className=" flex  flex-col gap-2">
            <label htmlFor="email">Email :</label>
            <input
              className="px-5 py-1 bg-white rounded-xl text-black"
              type="email"
              id="email"
              name="email"
              required
              {...register("email")}
            />
          </div>
          <div className=" flex  flex-col gap-2">
            <label htmlFor="password">Password :</label>
            <input
              className="px-5 py-1 bg-white rounded-xl text-black"
              type="password"
              id="password"
              name="password"
              required
              {...register("password")}
            />
          </div>
          <button className="bg-blue-700 rounded-2xl mt-4 h-10" type="submit">
            {isLogingIn ? "Logging in..." : "Login"}{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
