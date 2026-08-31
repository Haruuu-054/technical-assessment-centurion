import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicLink,
  PrismicImage,
  SliceComponentProps,
} from "@prismicio/react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
});

/**
 * Props for `BookingProcess`.
 */
export type BookingProcessProps =
  SliceComponentProps<Content.BookingProcessSlice>;

/**
 * Component for "BookingProcess" Slices.
 */
const BookingProcess: FC<BookingProcessProps> = ({ slice }) => {
  const { eyebrow, heading, description, cta_label, cta_link } =
    slice.primary;
  const steps = slice.items;

  return (
    <section
      id="process"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${spaceGrotesk.variable} w-full bg-[#F1EFEA] px-4 pt-6 pb-8 sm:px-6 sm:pt-7 sm:pb-10`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <span className="w-2 h-2 rounded-full bg-[#F70006] shrink-0" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#F70006]">
              {eyebrow}
            </span>
          </div>
        )}

        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="[&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:lg:text-5xl [&_h2]:font-semibold [&_h2]:text-[#171512] [&_h2]:leading-[1.12] [&_h2]:sm:leading-[1.08] [&_h2]:tracking-tight [&_h2]:mb-3 [&_h2]:sm:mb-4 [&_strong]:text-[#F70006] [&_strong]:font-semibold">
            <PrismicRichText field={heading} />
          </div>
          <div className="[&_p]:text-sm [&_p]:sm:text-base [&_p]:text-[#171512]/60 [&_p]:leading-relaxed [&_p]:mb-0">
            <PrismicRichText field={description} />
          </div>
        </div>

        <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6">
          {/* connecting line, desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[#171512]/10"
            style={{
              marginLeft: `calc(100% / ${steps?.length || 1} / 2)`,
              marginRight: `calc(100% / ${steps?.length || 1} / 2)`,
            }}
          />

          {steps?.map((step, index) => (
            <li key={index} className="relative flex flex-col items-start">
              <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F1EFEA] border border-[#171512]/[0.06] shadow-sm mb-4 sm:mb-5">
                {step.icon?.url ? (
                  <PrismicImage
                    field={step.icon}
                    className="w-5 h-5 sm:w-7 sm:h-7 object-contain"
                  />
                ) : (
                  <span className="text-xs sm:text-sm font-semibold text-[#F70006]">
                    {step.step_number || String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </div>

              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#F70006] mb-1.5 sm:mb-2">
                Step {step.step_number || String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-base sm:text-lg font-semibold text-[#171512] tracking-tight mb-1.5 sm:mb-2">
                {step.step_title}
              </h3>

              <div className="[&_p]:text-sm [&_p]:text-[#171512]/55 [&_p]:leading-relaxed [&_p]:mb-0">
                <PrismicRichText field={step.step_description} />
              </div>
            </li>
          ))}
        </ol>

        {cta_label && (
          <div className="mt-10 sm:mt-14">
            <PrismicLink
              field={cta_link}
              className="group flex sm:inline-flex items-center justify-center gap-1.5 rounded-full bg-[#F70006] hover:bg-[#d40005] active:bg-[#b80004] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F70006] transition-all duration-150 text-white text-sm font-semibold px-6 py-3.5 w-full sm:w-auto"
            >
              {cta_label}
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

export default BookingProcess;