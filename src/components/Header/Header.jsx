import HamMenu from "./HamMenu/HamMenu";
import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";

export default function Header(src) {
  return (
    <>
      <div className="flex justify-between mx-10 md:items-center lg:mx-40">
        <Logo src={src} name={"My Tinerary"} />
        <HamMenu />
        <NavBar />
      </div>
    </>
  );
}
