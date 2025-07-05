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
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`bg-[#292929] dark:bg-[#E9E5D8] w-full h-20 sm:h-24 md:h-32 lg:h-40`}
      ></motion.div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 lg:gap-12 max-w-7xl w-full mt-6 sm:mt-8 px-4 sm:px-6 lg:px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${libre_baskerville.className} italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center`}
        >
          21 + 21 + 21 Days ...
        </motion.p>

        {/* Book and Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 sm:gap-8 lg:gap-16"
        >
          {/* Book Image */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-[30rem] h-auto"
              alt="book cover"
              src={book_cover}
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="text-center lg:text-left">
              <p className={`${libre_caslon_display.className} font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight`}>
                It's
              </p>
              <p className={`${libre_caslon_display.className} font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight`}>
                You
              </p>
              <p className={`${libre_caslon_display.className} font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight`}>
                Vs
              </p>
              <p className={`${libre_caslon_display.className} font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight`}>
                You
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Challenge Band */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`flex items-center justify-center ${libre_baskerville.className} italic border-b-4 sm:border-b-6 lg:border-b-8 border-white text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full py-8 sm:py-12 lg:py-16 mt-12 sm:mt-16`}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl px-4 text-center max-w-5xl">
          Are You Ready To Challenge Yourself?
        </h2>
      </motion.div>

      {/* Footer Links */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`w-full bg-[#E9E5D8] dark:bg-[#292929] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 ${libre_baskerville.className}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8">
            {/* Brand Name */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight select-none mb-6 sm:mb-8 md:mb-0"
            >
              Hustlers <br /> Alliance
            </motion.div>

            {/* Links and Contact */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 w-full md:w-auto justify-end">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12">
                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h4 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-[#292929] dark:text-[#E9E5D8]">
                    Quick Links
                  </h4>
                  <ul className="space-y-2">
                    {quickLinks.map((link, index) => (
                      <motion.li 
                        key={link.target}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      >
                        <a
                          href={`#${link.target}`}
                          className="hover:underline text-[#292929] dark:text-[#E9E5D8] text-base sm:text-lg transition-all"
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h4 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-[#292929] dark:text-[#E9E5D8]">
                    Contact
                  </h4>
                  <div className="space-y-2">
                    <div className="text-[#292929] dark:text-[#E9E5D8] text-base sm:text-lg">
                      87884603309
                    </div>
                    <div>
                      <a
                        href="mailto:secondrule@gmail.com"
                        className="hover:underline text-[#292929] dark:text-[#E9E5D8] text-base sm:text-lg transition-all"
                      >
                        secondrule@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Theme Switcher */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-4 sm:mt-0"
              >
                <ThemeSwitcher />
              </motion.div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-8 sm:mt-10 lg:mt-12 pt-4 sm:pt-6 border-t border-[#292929] dark:border-[#E9E5D8] text-center"
          >
            <p className="text-base sm:text-lg text-[#292929] dark:text-[#E9E5D8] italic">
              © 2025 Hustlers Alliance. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.footer>

      {/* Bottom stripe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className={`bg-[#292929] dark:bg-[#E9E5D8] w-full h-12 sm:h-16 lg:h-20 border-b-4 sm:border-b-6 lg:border-b-8 border-white`}
      ></motion.div>
    </div>
  );
};