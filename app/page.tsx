import Image from "next/image";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import MobileNav from "@/components/MobileNav";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
});

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("landing_page");

  return (
    <main>
      <header
        className={`${spaceGrotesk.variable} sticky top-0 z-50 flex items-center justify-between bg-white px-6 py-5 sm:px-10 shadow-sm`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {/* Logo */}
        <div className="relative h-9 w-28 sm:h-10 sm:w-32">
          <Image
            src="/dwell-logo.png"
            alt="Dwell"
            fill
            sizes="128px"
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop nav — hidden on mobile */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#story"
            className="text-xs font-medium uppercase tracking-[0.14em] text-[#171512]/70 transition-colors hover:text-[#F70006]"
          >
            Our Story
          </a>
          <a
            href="#rooms"
            className="text-xs font-medium uppercase tracking-[0.14em] text-[#171512]/70 transition-colors hover:text-[#F70006]"
          >
            Rooms
          </a>
                    <a
            href="#process"
            className="text-xs font-medium uppercase tracking-[0.14em] text-[#171512]/70 transition-colors hover:text-[#F70006]"
          >
            Booking Process
          </a>
          <a
            href="#contact"
            className="text-xs font-medium uppercase tracking-[0.14em] text-[#171512]/70 transition-colors hover:text-[#F70006]"
          >
            Contact
          </a>
        </nav>

        {/* Desktop button — hidden on mobile */}
        <button className="hidden rounded-full bg-[#F70006] hover:bg-[#d40005] active:bg-[#b80004] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F70006] transition-all duration-150 px-6 py-2.5 text-sm font-medium text-white md:block">
          Book Now
        </button>

        {/* Mobile menu toggle — hidden on desktop */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </header>

      <SliceZone slices={page.data.slices} components={components} />

      <footer
        className={`${spaceGrotesk.variable} w-full bg-[#171512] px-6 pt-16 pb-8 sm:px-10 sm:pt-20`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 mb-14">
            {/* Brand */}
            <div className="lg:col-span-2 lg:pr-10">
              <div className="inline-flex items-center rounded-lg bg-white px-3 py-2 mb-5">
                <div className="relative h-7 w-24">
                  <Image
                    src="/dwell-logo.png"
                    alt="Dwell"
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-sm text-white/55 leading-relaxed max-w-xs">
                A heritage walk-up in the heart of Mong Kok, reworked for how
                you actually live.
              </p>
            </div>

            {/* Explore */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#F70006] mb-5">
                Explore
              </span>
              <ul className="flex flex-col gap-3.5">
                <li>
                  <a
                    href="#rooms"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Rooms
                  </a>
                </li>
                <li>
                  <a
                    href="#story"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#F70006] mb-5">
                Visit
              </span>
              <ul className="flex flex-col gap-3.5">
                <li className="text-sm text-white/60 leading-relaxed">
                  177 Prince Edward Road West
                  <br />
                  Mong Kok, Hong Kong
                </li>
                <li>
                  <a
                    href="mailto:hello@dwellstudent.com.hk"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    hello@dwellstudent.com.hk
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+85212345678"
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    +852 1234 5678
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between pt-8 border-t border-white/10">
            <span className="text-xs text-white/40">
              © {new Date().getFullYear()} dwell Prince Edward. All rights
              reserved.
            </span>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-white/40 transition-colors hover:text-white/70"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}