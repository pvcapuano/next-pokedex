import React, { useState } from "react";
import useLoginForm from "./hook/useLoginForm";
import Link from "next/link";

const Login = () => {
  const { email, password, setEmail, setPassword, handleSubmit } =
    useLoginForm();

  return (
    <div className="bg-blue-700 h-screen flex justify-center items-center">
      <form
        className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4 text-red-500"
        onSubmit={handleSubmit}
      >
        <p className="text-amber-500 text-lg sm:text-md">Seja bem-vindo!</p>
        <h1 className="font-extrabold select-none text-2xl sm:text-6xl text-amber-500">
          Entrar
        </h1>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-500 text-slate-900 p-2 w-full max-w-[40ch]"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          className="outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-500  text-slate-900 p-2 w-full max-w-[40ch]"
        />

        <button
          type="submit"
          className="w-full max-w-[40ch] text-amber-500 border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-blue-700"
        >
          <h2 className="relative z-20">Entrar</h2>
        </button>
        <h2 className="duration-300 text-amber-500 hover:scale-110 cursor-pointer uppercase">
          <Link href="/signup">Cadastre-se</Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
