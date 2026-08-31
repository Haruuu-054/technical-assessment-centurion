"use client";

import { useState } from "react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
});

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F70006]"
      >
        <span
          className={`block h-0.5 w-6 bg-[#171512] transition-all duration-200 ${
            open ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#171512] transition-all duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-[#171512] transition-all duration-200 ${
            open ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {open && (
        <nav
          className={`${spaceGrotesk.variable} absolute left-0 right-0 top-full flex flex-col gap-1 bg-white px-6 py-6 shadow-sm sm:px-10`}
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <a
            href="#story"
            onClick={() => setOpen(false)}
            className="py-3 text-xs font-medium uppercase tracking-[0.14em] text-[#171512]/70 transition-colors hover:text-[#F70006]"
          >
            Our Story
          </a>
          <a
            href="#rooms"
            onClick={() => setOpen(false)}
            className="py-3 text-xs font-medium uppercase tracking-[0.14em] text-[#171512]/70 transition-colors hover:text-[#F70006]"
          >
            Rooms
          </a>
          <a
            href="#process"
            onClick={() => setOpen(false)}
            className="py-3 text-xs font-medium uppercase tracking-[0.14em] text-[#171512]/70 transition-colors hover:text-[#F70006]"
          >
            Booking Process
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-3 text-xs font-medium uppercase tracking-[0.14em] text-[#171512]/70 transition-colors hover:text-[#F70006]"
          >
            Contact
          </a>
          <button className="mt-3 rounded-full bg-[#F70006] hover:bg-[#d40005] active:bg-[#b80004] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F70006] transition-all duration-150 px-6 py-2.5 text-sm font-medium text-white">
            Book Now
          </button>
        </nav>
      )}
    </div>
  );
}
