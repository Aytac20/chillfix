import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link
        to="/"
        aria-label="Home"
        className="inline-block font-['Staatliches'] text-[2.8rem] font-normal tracking-[0.4rem] text-[#d4d4d4] uppercase transition-all duration-200 ease-in hover:!text-[#0fb87f]"
      >
        ChillFix
      </Link>
    </div>
  );
}

export default Logo;
