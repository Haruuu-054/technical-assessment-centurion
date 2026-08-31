import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
});

/**
 * Props for `StatStrip`.
 */
export type StatStripProps = SliceComponentProps<Content.StatStripSlice>;

/**
 * Component for "StatStrip" Slices.
 */
const StatStrip: FC<StatStripProps> = ({ slice }) => {
  const { stats } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${spaceGrotesk.variable} w-full bg-[#F1EFEA] px-6 pt-4 pb-10 sm:px-10 sm:pt-6 sm:pb-14`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <div className="max-w-5xl mx-auto rounded-[28px] bg-white border border-[#C9C4BA]/50 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center gap-2 px-6 py-8 text-center ${
                index !== 0 ? "sm:border-l sm:border-[#EDEAE3]" : ""
              }`}
            >
              <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#F70006]">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.14em] text-[#171512]/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatStrip;