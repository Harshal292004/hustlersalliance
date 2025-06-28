"use server"
import React from "react";
import { AuthButton } from "./auth/Auth-button";
import { NavbarWraper } from "./NavbarWraper";
const Navbar= async ({id}:{id:string}) => {
  const auth= await AuthButton();
  return <NavbarWraper id={id } auth={auth}></NavbarWraper>
};

export {Navbar}
