"use client";
import { motion } from "motion/react";
import { libre_baskerville,libre_caslon_display } from "@/lib/fonts";
import Image from "next/image";
import book_cover from "@/assests/book_cover.png";
import { Title } from "./landing/Title";

const quickLinks = [
  { label: "About Us", target: "about-us" },
  { label: "Reviews", target: "reviews" },
  { label: "Purchase", target: "purchase" },
];

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen gap-8 ">
      <Title title="" />

      {/* Main Content Section */}
      <div className="flex flex-col justify-center items-center gap-8 max-w-7xl w-full">
        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${libre_baskerville.className} italic text-6xl md:text-8xl lg:text-[120px] text-center mb-4`}
        >
          21 + 21 + 21 Days ...
        </motion.p>

        {/* Book and Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full"
        >
          {/* Text - positioned to the left */}

          {/* Book Image - larger and centered */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <Image
              className="w-72 md:w-80 lg:w-[30rem] h-auto shadow-2xl transform hover:scale-105 transition-transform duration-300"
              alt="book cover"
              src={book_cover}
              priority
            />
          </div>

          <div className="flex flex-col justify-center items-center lg:items-end order-2 lg:order-1">
            <p
              className={`${libre_baskerville.className} text-5xl md:text-6xl lg:text-7xl italic text-center lg:text-right leading-tight`}
            >
              It<span className="text-red-600">'</span>s<br />
              You
              <br />
              Vs
              <br />
              You
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className={`flex items-center justify-center ${libre_baskerville.className} italic text-[#E9E5D8] dark:text-[#292929] bg-[#292929] dark:bg-[#E9E5D8] w-full h-72  text-8xl  border-b-4  border-[#fff]`}
      >
        Are You Ready To Challenge Yourself At This?
      </motion.div>
      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`w-full bg-[#E9E5D8] dark:bg-[#292929] dark:border-[#000] py-6 px-6  ${libre_baskerville.className}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Brand Name */}
            <div className="flex-shrink-0">
              <h3 className="text-2xl md:text-3xl font-bold text-[#292929] dark:text-[#E9E5D8] italic">
                Hustlers Alliance
              </h3>
            </div>

            {/* Links and Contact Container */}
            <div className="flex flex-col sm:flex-row gap-8 md:gap-12 w-full md:w-auto justify-end">
              {/* Quick Links */}
              <div className="text-base">
                <h4 className="italic font-semibold text-lg mb-3 text-[#292929] dark:text-[#E9E5D8]">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.target}>
                      <a
                        href={`#${link.target}`}
                        className="hover:underline text-[#292929] dark:text-[#E9E5D8] hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="text-base">
                <h4 className="italic font-semibold text-lg mb-3 text-[#292929] dark:text-[#E9E5D8]">
                  Contact
                </h4>
                <div className="space-y-2">
                  <div className="text-[#292929] dark:text-[#E9E5D8]">
                    87884603309
                  </div>
                  <div>
                    <a
                      href="mailto:secondrule@gmail.com"
                      className="hover:underline text-[#292929] dark:text-[#E9E5D8] hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
                    >
                      secondrule@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright/Bottom section */}
          <div className="mt-8 pt-6 border-t border-[#292929] dark:border-[#E9E5D8] text-center">
            <p className="text-sm text-[#292929] dark:text-[#E9E5D8] italic">
              © 2025 Hustlers Alliance. Transform your life in 63 days.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};
