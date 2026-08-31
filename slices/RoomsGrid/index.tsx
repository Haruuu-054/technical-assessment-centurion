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
 * Props for `RoomsGrid`.
 */
export type RoomsGridProps = SliceComponentProps<Content.RoomsGridSlice>;

/**
 * Component for "RoomsGrid" Slices.
 */
const RoomsGrid: FC<RoomsGridProps> = ({ slice }) => {
  const { eyebrow, heading, description, rooms } = slice.primary;

  return (
    <section
      id="rooms"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${spaceGrotesk.variable} w-full bg-[#F1EFEA] px-6 pt-7 pb-5 sm:px-5 sm:pt-5 sm:pb-10`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#F70006]" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F70006]">
              {eyebrow}
            </span>
          </div>
        )}

        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="[&_h2]:text-4xl [&_h2]:sm:text-5xl [&_h2]:font-semibold [&_h2]:text-[#171512] [&_h2]:leading-[1.08] [&_h2]:tracking-tight [&_h2]:mb-5 [&_strong]:text-[#F70006] [&_strong]:font-semibold">
            <PrismicRichText field={heading} />
          </div>
          <div className="[&_p]:text-base [&_p]:text-[#171512]/60 [&_p]:leading-relaxed [&_p]:mb-0">
            <PrismicRichText field={description} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {rooms?.map((room, index) => (
            <div
              key={index}
              className="group flex flex-col rounded-[28px] bg-white border border-[#171512]/[0.06] shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <PrismicImage
                  field={room.image}
                  className="w-full h-56 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col flex-1 p-7">
                <h3 className="text-lg font-semibold text-[#171512] tracking-tight mb-1.5">
                  {room.title}
                </h3>

                <p className="text-sm text-[#171512]/55 mb-5">
                  {room.price}
                  <span className="text-[#171512]/40"> / month</span>
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.guests && (
                    <span className="text-xs font-medium text-[#171512]/70 border border-[#171512]/10 rounded-full px-3 py-1.5">
                      {room.guests}
                    </span>
                  )}
                  {room.beds && (
                    <span className="text-xs font-medium text-[#171512]/70 border border-[#171512]/10 rounded-full px-3 py-1.5">
                      {room.beds}
                    </span>
                  )}
                  {room.bath && (
                    <span className="text-xs font-medium text-[#171512]/70 border border-[#171512]/10 rounded-full px-3 py-1.5">
                      {room.bath}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-5 border-t border-[#171512]/[0.06]">
                  <PrismicLink
                    field={room.link}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-[#F70006]"
                  >
                    View Details
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-150 group-hover/link:translate-x-1"
                    >
                      →
                    </span>
                  </PrismicLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsGrid;