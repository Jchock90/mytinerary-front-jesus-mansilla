import Home from '../Header/NavBar/Home'
import Cities from '../Header/NavBar/Cities'

export default function Footer() {
  return (
    <>
        <footer className="flex w-full min-h-[5vh] mx-auto bg-gray-400 gap-6 justify-between lg:min-h-[10vh] xl:min-h-[20vh]">
            <nav className="flex w-1/3 justify-evenly items-center gap-6">
                <Home />
                <Cities />
            </nav>
        </footer>
    </>
  );
}
