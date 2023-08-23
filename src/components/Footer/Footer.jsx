import FooterCities from "./FooterCities";
import FooterHome from "./FooterHome";
import FooterLogin from "./FooterLogin";

export default function Footer() {
  return (
    <>
        <footer className="flex w-full min-h-[5vh] mx-auto bg-gray-100 gap-8 lg:min-h-[10vh]">
            <nav className="flex justify-evenly items-center gap-4 mx-auto">
                <FooterHome />
                <FooterCities />
                <FooterLogin />
            </nav>
        </footer>
    </>
  );
}
