import { Event } from "../../data/events";

type Props = {
  event: Event;
};

function UpcomingEventCard({ event }: Props) {
  return (
    <div className="w-80 h-44 rounded-lg md:w-[746px] md:h-96 md:rounded-[20px] cursor-pointer">
      <img src={event.image} className="object-fill"/>
      <p className="hover:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-[4.5vw] uppercase [text-shadow:0px_0px_2px_black] w-full p-[5px] text-center pointer-events-none">
        More info
      </p>
    </div>
  );
}

export default UpcomingEventCard;
