import orangeMelt from "../../images/backdrops/orangeMelt.jpg";


function Newsletter() {
  return (
    <div className="flex-shrink-0 relative w-screen h-[813px] md:h-[847px] overflow-hidden">
      <img
        src={orangeMelt}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
}

export default Newsletter;
