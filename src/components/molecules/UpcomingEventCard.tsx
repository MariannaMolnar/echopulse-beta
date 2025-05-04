import { Event } from "../../data/events";

type Props = {
  event: Event;
};

function UpcomingEventCard({ event }: Props) {
  return (
    <div className="relative w-80 h-44 rounded-lg md:w-[746px] md:h-96 md:rounded-[20px] cursor-pointer overflow-hidden group">
      <img
        src={event.image}
        className="absolute inset-0 w-full h-full object-cover z-0
                    transition-all duration-300 ease-in-out
                    group-hover:filter group-hover:grayscale group-hover:blur-xs"
      />
      {/* Overlay Layer: Fades in on hover */}
      <div
        className="
          absolute inset-0 z-10 /* Position above image */
          bg-black/40           /* Semi-transparent black overlay */
          opacity-0 group-hover:opacity-100 /* Fade in on hover */
          transition-opacity duration-300 ease-in-out
        "
        aria-hidden="true"
      ></div>

      {/* Text: Centered, appears on hover */}
      <p
        className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 /* Center */
          z-20                                            /* Position above overlay */
          opacity-0 group-hover:opacity-100               /* Fade in on hover */
          transition-opacity delay-100 duration-300 ease-in-out /* Add slight delay */
          text-white font-capMarker font-bold text-lg md:text-7xl     /* Text styling */
          uppercase leading-[71.92px]                        /* Text styling */
          text-center                                     /* Text styling */
          pointer-events-none                             /* Allow clicks to pass through */
        "
      >
        More info
      </p>
    </div>
  );
}

export default UpcomingEventCard;
