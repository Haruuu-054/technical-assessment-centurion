import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
});

/**
 * Props for `BuildingStory`.
 */
export type BuildingStoryProps =
  SliceComponentProps<Content.BuildingStorySlice>;

/**
 * Component for "BuildingStory" Slices.
 */
const BuildingStory: FC<BuildingStoryProps> = ({ slice }) => {
  const { eyebrow, heading, description, timeline, panel_image } =
    slice.primary;

  return (
    <section
      id="story"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${spaceGrotesk.variable} w-full bg-[#F1EFEA] px-6 pt-7 pb-5 sm:px-5 sm:pt-5 sm:pb-10`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <div className="flex items-center gap-2 mb-10 sm:mb-14">
            <span className="w-2 h-2 rounded-full bg-[#F70006]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F70006]">
              {eyebrow}
            </span>
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-stretch">
          {/* Floating advantages card — overlaps the panel on large screens */}
          <div className="relative z-20 bg-white rounded-2xl shadow-lg p-6 sm:p-7 lg:-mr-16 lg:mt-14">
            <h3 className="text-sm font-bold uppercase tracking-wide text-[#171512] mb-4 pb-4 border-b border-[#EDEAE3]">
              The Dwell Story
            </h3>
            <ul>
              {timeline?.map((item, index) => (
                <li
                  key={index}
                  className="group border-b border-[#EDEAE3] last:border-b-0 py-3.5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      {item.tag && (
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F70006] mb-1">
                          {item.tag}
                        </span>
                      )}
                      <span className="text-sm font-medium text-[#171512]/80 transition-colors group-hover:text-[#171512]">
                        {item.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-[#171512]/25 transition-all group-hover:translate-x-0.5 group-hover:text-[#F70006]">
                      →
                    </span>
                  </div>
                  {item.description && (
                    <p className="mt-1.5 text-xs text-[#171512]/55 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Statement panel */}
          <div className="relative overflow-hidden rounded-[28px] bg-[#171512] h-full min-h-[360px] flex items-end p-8 sm:p-10 lg:p-12">
            {panel_image?.url && (
              <PrismicNextImage
                field={panel_image}
                fill
                priority
                fallbackAlt=""
                className="absolute inset-0 z-0 object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            )}

            {/* Overlay to keep the heading/description legible over the photo */}
            <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/90 via-black/50 to-black/5" />

            <div className="relative z-10 max-w-lg">
              <div className="[&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:lg:text-5xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:leading-[1.1] [&_h2]:tracking-tight [&_strong]:text-[#F70006] [&_strong]:font-semibold mb-4">
                <PrismicRichText field={heading} />
              </div>
              <div className="[&_p]:text-sm [&_p]:sm:text-base [&_p]:text-white/60 [&_p]:leading-relaxed [&_p]:mb-0">
                <PrismicRichText field={description} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingStory;
