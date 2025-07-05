"use client";
import { motion } from "framer-motion";
import { libre_baskerville, libre_caslon_display } from "@/lib/fonts";
import Image from "next/image";
import book_cover from "@/assests/book_cover.png";
import { ThemeSwitcher } from "./ui/Theme-switcher";

const quickLinks = [
  { label: "About Us", target: "about-us" },
  { label: "Reviews", target: "reviews" },
  { label: "Purchase", target: "purchase" },
];

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto gap-4 text-[#292929] dark:text-[#E9E5D8]">
      {/* Top stripe */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`bg-[#292929] dark:bg-[#E9E5D8] w-full h-40`}
      ></motion.div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center gap-12 max-w-7xl w-full mt-8 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${libre_baskerville.className} italic text-7xl md:text-8xl text-center`}
        >
          21 + 21 + 21 Days ...
        </motion.p>

        {/* Book and Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center justify-center w-full gap-8 lg:gap-16"
        >
          {/* Book Image */}
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              className="w-64 md:w-80 lg:w-[30rem] h-auto"
              alt="book cover"
              src={book_cover}
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="text-center lg:text-left">
              <p className={`${libre_caslon_display.className} font-extrabold text-6xl md:text-7xl leading-tight`}>
                It's
              </p>
              <p className={`${libre_caslon_display.className} font-extrabold text-6xl md:text-7xl leading-tight`}>
                You
              </p>
              <p className={`${libre_caslon_display.className} font-extrabold text-6xl md:text-7xl leading-tight`}>
                Vs
              </p>
              <p className={`${libre_caslon_display.className} font-extrabold text-6xl md:text-7xl leading-tight`}>
                You
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Challenge Band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`flex items-center justify-center ${libre_baskerville.className} italic border-b-8 border-white text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full py-16 mt-16`}
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl px-4 text-center max-w-5xl">
          Are You Ready To Challenge Yourself?
        </h2>
      </motion.div>

      {/* Footer Links */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`w-full bg-[#E9E5D8] dark:bg-[#292929] py-12 px-6 ${libre_baskerville.className}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Brand Name */}
            <div className="text-3xl md:text-4xl font-bold leading-tight select-none mb-8 md:mb-0">
              Hustlers <br /> Alliance
            </div>

            {/* Links and Contact */}
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 w-full md:w-auto justify-end">
              <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-xl mb-4 text-[#292929] dark:text-[#E9E5D8]">
                    Quick Links
                  </h4>
                  <ul className="space-y-2">
                    {quickLinks.map((link) => (
                      <li key={link.target}>
                        <a
                          href={`#${link.target}`}
                          className="hover:underline text-[#292929] dark:text-[#E9E5D8] text-lg"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information */}
                <div>
                  <h4 className="font-semibold text-xl mb-4 text-[#292929] dark:text-[#E9E5D8]">
                    Contact
                  </h4>
                  <div className="space-y-2">
                    <div className="text-[#292929] dark:text-[#E9E5D8] text-lg">
                      87884603309
                    </div>
                    <div>
                      <a
                        href="mailto:secondrule@gmail.com"
                        className="hover:underline text-[#292929] dark:text-[#E9E5D8] text-lg"
                      >
                        secondrule@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Theme Switcher */}
              <div className="mt-4 sm:mt-0">
                <ThemeSwitcher />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-[#292929] dark:border-[#E9E5D8] text-center">
            <p className="text-lg text-[#292929] dark:text-[#E9E5D8] italic">
              © 2025 Hustlers Alliance. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>

      {/* Bottom stripe */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`bg-[#292929] dark:bg-[#E9E5D8] w-full h-20 border-b-8 border-white`}
      ></motion.div>
    </div>
  );
};