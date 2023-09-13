import Cities from "./Cities";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import { useSelector } from "react-redux";

export default function NavBar() {
    let isLoggedIn = useSelector((store) => store.users.isLoggedIn);
    let name = useSelector((store) => store.users.user?.name);
    let photo = useSelector((store) => store.users.user?.photo);

    return (
        <>
            <nav className="justify-between hidden mx-10 md:flex md:gap-4 md:items-center">
                <div className="flex flex-col items-center">
                    {photo && (
                        <img
                            src={photo}
                            alt="Profile"
                            className="w-10 h-10 rounded-full mb-2" 
                        />
                    )}
                    {name && <div className="text-center font-bold">{name}</div>}
                </div>
                <Home />
                <Cities />
                {/* <Profile/> */}
                {isLoggedIn ? <Logout /> : <Login />}
            </nav>
        </>
    );
}
