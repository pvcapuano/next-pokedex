import { useState } from "react";
/* import Dashboard from "../components/Dashboard"; */
import Login from "../components/Login";
import { useAuthContext } from "@/hooks/useAuthContext";
import Head from "next/head";
import AppInicial from "@/components/AppInicial";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <>
      <Head>
        <title>Pokemon</title>
        <meta name="Pokemon" content="Pokemon"></meta>
        <link rel="icon" href="/ball.jpg" />
      </Head>
      {!user && <Login />}
      {/* {user && <Dashboard />} */}
      {user && <AppInicial />}
    </>
  );
}
