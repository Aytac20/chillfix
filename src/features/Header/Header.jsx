import Logo from "./Logo";
import Navbar from "./Navbar";
function Header() {
  return (
    <header>
      <div className="hidden pt-[3rem] pl-[3.5rem] lg:block">
        <Logo />
      </div>

      <div className="hidden w-full lg:block">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
