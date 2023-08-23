import Cities from "./Cities";
import Home from "./Home";
import Login from "./Login";


export default function NavBar() {
  
    return (
        <>
            <nav className="justify-between hidden mx-10 md:flex md:gap-6 md:items-center">
                <Home />
                <Cities />
                <Login />
            </nav>
        </>
    );
}
