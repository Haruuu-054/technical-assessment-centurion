"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="p-2"
      >
        {/* simple hamburger / close icon */}
        <div className="space-y-1.5">
          <span className="block h-0.5 w-6 bg-black" />
          <span className="block h-0.5 w-6 bg-black" />
          <span className="block h-0.5 w-6 bg-black" />
        </div>
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-full flex flex-col gap-4 bg-white px-8 py-6 shadow-md">
          <a href="#rooms" onClick={() => setOpen(false)}>Rooms</a>
          <a href="#story" onClick={() => setOpen(false)}>Our Story</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <button className="rounded-full bg-[#F70006] px-6 py-3 text-white">
            Book Now
          </button>
        </nav>
      )}
    </div>
  );
}