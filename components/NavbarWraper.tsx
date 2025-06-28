// "use client";
// import React from "react";
// import { libre_baskerville } from "@/lib/fonts";
// import { scrollToSection } from "@/lib/scrollToSection";
// import { Button } from "./ui/Button";
// const NavbarWraper = ({ auth, id }: { auth: React.ReactNode; id: string }) => {
//   return (
//     <nav
//       id={id}
//       className={`mb-10 mt-10 p-2 ${libre_baskerville.className} w-screen h-10 text-[#292929] dark:text-[#E9E5D8] flex flex-row justify-between  items-center`}
//     >
//       {/*Text logo */}
//       <div className={`ml-5  text-3xl`}>
//         {"Hustlers"} <br></br>
//         {"Alliance"}
//       </div>
//       {/*About Us*/}
//       <Button
//         onClick={() => {
//           scrollToSection({ element_id: "about-us" });
//         }}
//         variant={"underline"}
//       >
//         About Us
//       </Button>
//       <Button
//         onClick={(e) => {
//           e.preventDefault();
//           scrollToSection({ element_id: "reviews" });
//         }}

//         variant={"underline"}
//       >
//         Reviews
//       </Button>

//       {/*Purchase */}
//       <Button
//         onClick={(e) => {
//           e.preventDefault();
//           scrollToSection({ element_id: "purchase" });
//         }}

//         variant={"underline"}
//       >
//         Purchase
//       </Button>


//       {/* Contact Us */}
//       <Button
//         onClick={(e) => {
//           e.preventDefault();
//           scrollToSection({ element_id: "contact_us" });
//         }}

//         variant={"underline"}
//       >
//         Contact Us
//       </Button>


//       {/*Login Sign up*/}

//       {auth}
//     </nav>
//   );
// };

// export { NavbarWraper };



"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { libre_baskerville } from "@/lib/fonts";
import { Button } from "./ui/Button";
import { scrollToSection } from "@/lib/scrollToSection";


export function NavbarWraper({ id,auth }: {id:string,auth: React.ReactNode}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const links = [
    { label: "About Us", target: "about-us" },
    { label: "Reviews", target: "reviews" },
    { label: "Purchase", target: "purchase" },
    { label: "Contact Us", target: "contact_us" },
  ];

  return (
    <motion.header
      id={id}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${libre_baskerville.className} fixed top-0 z-50 w-full bg-[#F6F0E6]/70 backdrop-blur dark:bg-[#0f0f0f]/70`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <div className="text-2xl font-bold leading-tight">
          Hustlers
          <br />
          Alliance
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <Button
              key={l.target}
              variant="underline"
              onClick={() => scrollToSection({ element_id: l.target })}
            >
              {l.label}
            </Button>
          ))}
          {auth}
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </Button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 pb-6 pt-4">
              {links.map(l => (
                <li key={l.target}>
                  <Button
                    variant="underline"
                    onClick={() => {
                      setOpen(false);
                      scrollToSection({ element_id: l.target });
                    }}
                  >
                    {l.label}
                  </Button>
                </li>
              ))}
              {auth}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

