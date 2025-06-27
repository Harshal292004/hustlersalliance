"use client";
import React from "react";
import { libre_baskerville } from "@/lib/fonts";
import { scrollToSection } from "@/lib/scrollToSection";
import { motion } from "motion/react";

const NavbarWraper = ({ auth }: { auth: React.ReactNode }) => {
  return (
    <div>
      <nav
        className={`${libre_baskerville.className} w-screen h-10 text-[#292929] dark:text-[#E9E5D8] flex flex-row justify-around `}
      >
        {/*Text logo */}
        <div></div>
        {/*About Us*/}
        <motion.a
          href="about_us"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection({ element_id: "about_us" });
          }}
          className="relative inline-block text-lg"
          whileHover="hover"
          initial="rest"
          animate="rest"
          variants={{
            rest: {},
            hover: {},
          }}
        >
          About Us
          <motion.span
            className="absolute left-0 bottom-0 h-[2px] bg-[#292929] dark:bg-[#E9E5D8]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
        {/*Review*/}
        <motion.a
          href="about_us"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection({ element_id: "about_us" });
          }}
          className="relative inline-block text-lg"
          whileHover="hover"
          initial="rest"
          animate="rest"
          variants={{
            rest: {},
            hover: {},
          }}
        >
          Review
          <motion.span
            className="absolute left-0 bottom-0 h-[2px] bg-[#292929] dark:bg-[#E9E5D8]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/*Purchase */}
        <motion.a
          href="about_us"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection({ element_id: "about_us" });
          }}
          className="relative inline-block text-lg"
          whileHover="hover"
          initial="rest"
          animate="rest"
          variants={{
            rest: {},
            hover: {},
          }}
        >
          Purchase
          <motion.span
            className="absolute left-0 bottom-0 h-[2px] bg-[#292929] dark:bg-[#E9E5D8]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/*Login Sign up*/}
        {auth}
      </nav>
    </div>
  );
};

export {NavbarWraper};
