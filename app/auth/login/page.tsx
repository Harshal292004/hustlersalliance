// page.tsx
"use client";
import { LoginForm } from "@/components/auth/Login-form";
import { motion } from "framer-motion";
import hourglass from "@/assests/hoursglassdark.png";
import Image from "next/image";

export default function Page() {
  return (
    <div className="fle flex-row  justify-center items-center w-full bg-[#E9E5D8] dark:bg-[#292929]">
      <div className="flex-1 relative ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={hourglass}
            alt="Hourglass"
            className="lg:absolute mx-auto lg:w-[50%] lg:top-0 lg:-left-[530px] pointer-events-none select-none z-0  object-cover"
          />
        </motion.div>
      </div>

      <LoginForm />
    </div>
  );
}
