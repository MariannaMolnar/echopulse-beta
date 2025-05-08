import { Link } from "react-router-dom";

type ButtonProps = {
  btnText: string;
  linkTo: string;
};

function ButtonHomePage({ btnText, linkTo }: ButtonProps) {
  return (
    <div className="flex justify-center items-center w-57 md:w-75 h-12 md:h-16">
      <Link to={linkTo}>
        <button className="w-59 md:w-76 rounded-full border-2 border-sand text-center text-sand text-base md:text-xl font-normal font-smallCaps uppercase leading-none md:leading-tight tracking-wider md:tracking-widest cursor-pointer px-6 py-[15px] md:px-7 md:py-4 hover:bg-sand hover:text-black transition-colors ease-out duration-400">
          {btnText}
        </button>
      </Link>
    </div>
  );
}

export default ButtonHomePage;
