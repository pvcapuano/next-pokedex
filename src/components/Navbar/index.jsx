"use client";

import Link from "next/link";
import React, { useState } from "react";
/* import useLogout from "../../hooks/useLogout"; */

const Navbar = () => {
  /* const { logout } = useLogout(); */
  return (
    <>
      <div className="sticky top-0 w-full left-0 bg-red-600 flex items-center justify-between p-4 border-b border-solid border-white">
        <Link href="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
            width={120}
            height={60}
          />
        </Link>
        <p
          className="font-bold text-white text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-xl"
          onClick={() => console.log("work")}
        >
          Sair
        </p>
      </div>
    </>
  );
};

export default Navbar;
