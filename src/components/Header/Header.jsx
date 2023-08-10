import HamMenu from "./HamMenu/HamMenu";
import Logo from "./Logo";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  return (
    <>
      <div className="flex justify-between  mx-10 mt-2 mb-20 md:items-center lg:mx-20">

        <Logo src={ '' } name={"My Tinerary"} />

        <HamMenu />
        <NavBar />
      </div>
    </>
  );
}
