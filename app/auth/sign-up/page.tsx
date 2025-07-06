"use client"
import { SignUpForm } from "@/components/auth/Sign-up-form";
import Image from "next/image";
import gear from "@/assests/gears.png";
export default function Page() {
  return (
    <div className="mt-40 flex min-h-svh w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 bg-[#E9E5D8] dark:bg-[#292929]">
      <Image
        className=" fixed -top-5  -right-56 w-[28%] overflow-hidden"
        src={gear}
        alt="gear-1"
      ></Image>
      <Image
        className="fixed top-72 -left-64 w-[28%] overflow-hidden transform scale-x-[-1]"
        src={gear}
        alt="gear-2"
      />

      <Image
        className=" fixed rotate-90 left-52 -bottom-64"
        src={gear}
        alt="gear-3"
      ></Image>
      <Image
        className="fixed rotate-90 -right-[300px] -bottom-12"
        src={gear}
        alt="gear-4"
      ></Image>
      <Image
        className=" fixed rotate-90 left-72 -top-[400px] "
        src={gear}
        alt="gear-5"
      ></Image>

      <SignUpForm />
    </div>
  );
}
