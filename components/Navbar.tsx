"use server"
import React from "react";
import { AuthButton } from "./auth/Auth-button";
import { NavbarWraper } from "./NavbarWraper";
const Navbar= async () => {
  const auth= await AuthButton();
  return <NavbarWraper auth={auth}></NavbarWraper>
};

export {Navbar}
