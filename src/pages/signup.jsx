import React, { useState } from "react";
import Link from "next/link";
import useSignupForm from "@/components/Login/hook/useSignupForm";

const SignupPage = () => {
  const { email, password, setEmail, setPassword, handleSubmit } =
    useSignupForm();
  return (
    <div className="bg-blue-200 h-screen flex flex-col justify-start items-center">
      <div className="mt-20">
        <div>
          <img
            className="w-52 mb-2"
            src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1"
          />
          <form
            className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 md:gap-3 text-red-500"
            onSubmit={handleSubmit}
          >
            <h1 className="font-extrabold select-none text-2xl sm:text-4xl text-blue-800">
              Cadastro
            </h1>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="outline-none duration-300 border-b-2 rounded-xl border-solid border-white focus:border-cyan-500 text-slate-900 p-2 w-full max-w-[40ch]"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="outline-none duration-300  rounded-xl border-b-2 border-solid border-white focus:border-cyan-500  text-slate-900 p-2 w-full max-w-[40ch]"
            />

            <button
              type="submit"
              className="w-full max-w-[40ch] text-blue-800  rounded-xl border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-blue-800 after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-blue-200"
            >
              <h2 className="relative z-20 ">Cadastrar</h2>
            </button>
            <h2
              onClick={() => {
                setIsLoggingIn(!isLoggingIn);
              }}
              className="duration-300 text-blue-800 hover:scale-110 cursor-pointer uppercase"
            >
              <Link href="/">Login</Link>
            </h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
