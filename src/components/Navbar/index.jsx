"use client";

import Link from "next/link";
import React, { useState } from "react";
import useLogout from "../../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  return (
    <>
      <div className="sticky top-0 w-full left-0 bg-blue-800 flex items-center justify-between p-3 border-b border-solid border-white">
        <Link href="/">
          <img
            src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Photo-Image.png"
            width={80}
          />
        </Link>
        <p
          className="font-bold text-white text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-xl"
          onClick={logout}
        >
          Sair
        </p>
      </div>
    </>
  );
};

export default Navbar;
