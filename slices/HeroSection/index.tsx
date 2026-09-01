import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicLink,
  SliceComponentProps,
} from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
});

export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

const HeroSection: FC<HeroSectionProps> = ({ slice }) => {
  const {
    eyebrow_text,
    eyebrow_tag,
    heading,
    sub_heading,
    image,
    image_secondary_top,
    image_secondary_top_link,
    image_secondary_bottom,
    image_secondary_bottom_link,
    primary_cta_label,
    primary_cta_link,
    secondary_cta_label,
    secondary_cta_link,
  } = slice.primary;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${spaceGrotesk.variable} w-full bg-[#F1EFEA] py-4 px-4 sm:py-6 sm:px-6`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-3 sm:gap-4">
        {/* Big hero card */}
        <div className="relative w-full lg:flex-[2.2] rounded-[20px] sm:rounded-[28px] overflow-hidden group h-[420px] sm:h-[520px] lg:h-auto lg:min-h-[640px] xl:min-h-[720px]">
          <div className="absolute inset-0">
            <PrismicNextImage
              field={image}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              fill
              sizes="100vw"
              priority
              fallbackAlt=""
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/35 pointer-events-none" />

          <div
            className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 sm:px-10 pt-5 sm:pt-8"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <div className="flex items-center gap-1.5 sm:gap-2 text-white text-[10px] sm:text-xs font-medium uppercase tracking-[0.1em] sm:tracking-[0.14em]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F70006] shrink-0" />
              {eyebrow_text && <span>{eyebrow_text}</span>}
              {eyebrow_tag && (
                <span className="text-white/60 hidden sm:inline">
                  — {eyebrow_tag}
                </span>
              )}
            </div>

            {secondary_cta_label && (
              <PrismicLink
                field={secondary_cta_link}
                className="inline-block bg-white hover:bg-white/90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-150 text-[#171512] text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full whitespace-nowrap"
              >
                {secondary_cta_label}
              </PrismicLink>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 px-4 sm:px-10 pb-6 sm:pb-10">
            <div className="max-w-xl">
              <div className="[&_h1]:text-3xl [&_h1]:sm:text-5xl [&_h1]:lg:text-6xl [&_h1]:font-semibold [&_h1]:leading-[1.1] [&_h1]:sm:leading-[1.05] [&_h1]:tracking-tight [&_h1]:text-white [&_strong]:text-[#F70006] [&_strong]:font-semibold mb-2 sm:mb-4">
                <PrismicRichText field={heading} />
              </div>
              <div className="max-w-md text-xs sm:text-base text-white/75 leading-relaxed [&_p]:mb-0">
                <PrismicRichText field={sub_heading} />
              </div>
            </div>

            {primary_cta_label && (
              <PrismicLink
                field={primary_cta_link}
                aria-label={primary_cta_label}
                title={primary_cta_label}
                className="shrink-0 self-start inline-flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-[#F70006] hover:bg-[#d40005] active:bg-[#b80004] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F70006] transition-all duration-150"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-white transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:w-[22px] sm:h-[22px]">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </PrismicLink>
            )}
          </div>
        </div>

        {/* Two side images: horizontal row on mobile, stacked column on lg+ */}
        <div className="flex flex-row lg:flex-col gap-3 sm:gap-4 w-full lg:flex-1">
          {/* Prince Edward */}
          <PrismicLink
            field={image_secondary_top_link}
            aria-label="Dwell Prince Edward"
            className="relative flex-1 h-[160px] sm:h-[220px] lg:h-auto lg:flex-1 rounded-[20px] sm:rounded-[28px] overflow-hidden group/top block cursor-pointer"
          >
            <PrismicNextImage
              field={image_secondary_top}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/top:scale-[1.06]"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              fallbackAlt=""
            />
            {/* Permanent light scrim on mobile (no hover), stronger reveal-on-hover on lg+ */}
            <div className="absolute inset-0 bg-black/25 lg:bg-black/0 lg:group-hover/top:bg-black/40 transition-colors duration-300 pointer-events-none" />
            <div
              className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-5 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover/top:opacity-100 lg:group-hover/top:translate-y-0 transition-all duration-300"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="text-white text-xs sm:text-sm lg:text-lg font-semibold tracking-tight leading-tight">
                Dwell Prince Edward
              </span>
            </div>
          </PrismicLink>

          {/* Ho Man Tin */}
          <PrismicLink
            field={image_secondary_bottom_link}
            aria-label="Dwell Ho Man Tin"
            className="relative flex-1 h-[160px] sm:h-[220px] lg:h-auto lg:flex-1 rounded-[20px] sm:rounded-[28px] overflow-hidden group/bottom block cursor-pointer"
          >
            <PrismicNextImage
              field={image_secondary_bottom}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/bottom:scale-[1.06]"
              fill
              sizes="(max-width: 1024px) 50vw, 33vw"
              fallbackAlt=""
            />
            <div className="absolute inset-0 bg-black/25 lg:bg-black/0 lg:group-hover/bottom:bg-black/40 transition-colors duration-300 pointer-events-none" />
            <div
              className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-5 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-2 lg:group-hover/bottom:opacity-100 lg:group-hover/bottom:translate-y-0 transition-all duration-300"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="text-white text-xs sm:text-sm lg:text-lg font-semibold tracking-tight leading-tight">
                Dwell Ho Man Tin
              </span>
            </div>
          </PrismicLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;