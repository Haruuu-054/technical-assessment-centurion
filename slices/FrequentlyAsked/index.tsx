"use client";

import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicLink,
  SliceComponentProps,
} from "@prismicio/react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
});

/**
 * Props for `FrequentlyAsked`.
 */
export type FrequentlyAskedProps =
  SliceComponentProps<Content.FrequentlyAskedSlice>;

/**
 * Component for "FrequentlyAsked" Slices.
 */
const FrequentlyAsked: FC<FrequentlyAskedProps> = ({ slice }) => {
  const { eyebrow, heading, description, contact_label, contact_link } =
    slice.primary;
  const items = slice.items;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="contact"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${spaceGrotesk.variable} w-full bg-[#F1EFEA] px-6 pt-7 pb-5 sm:px-5 sm:pt-5 sm:pb-10`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <div className="max-w-3xl mx-auto">
        {eyebrow && (
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#F70006]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F70006]">
              {eyebrow}
            </span>
          </div>
        )}

        <div className="text-center mb-12">
          <div className="[&_h2]:text-4xl [&_h2]:sm:text-5xl [&_h2]:font-semibold [&_h2]:text-[#171512] [&_h2]:leading-[1.08] [&_h2]:tracking-tight [&_h2]:mb-4 [&_strong]:text-[#F70006] [&_strong]:font-semibold">
            <PrismicRichText field={heading} />
          </div>
          <div className="[&_p]:text-base [&_p]:text-[#171512]/60 [&_p]:leading-relaxed [&_p]:mb-0">
            <PrismicRichText field={description} />
          </div>
        </div>

        <div className="flex flex-col rounded-[28px] bg-white border border-[#171512]/[0.06] shadow-sm divide-y divide-[#171512]/[0.06] px-6 sm:px-8">
          {items?.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-1">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F70006]"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#171512] tracking-tight transition-colors group-hover:text-[#171512]/80">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#F1EFEA] text-[#F70006] text-lg font-semibold transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="[&_p]:text-sm [&_p]:sm:text-base [&_p]:text-[#171512]/55 [&_p]:leading-relaxed [&_p]:pr-10 [&_p]:mb-0">
                      <PrismicRichText field={item.answer} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {contact_label && (
          <div className="mt-10 text-center">
            <PrismicLink
              field={contact_link}
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#F70006]"
            >
              {contact_label}
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                →
              </span>
            </PrismicLink>
          </div>
        )}
      </div>
    </section>
  );
};

export default FrequentlyAsked;