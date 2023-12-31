import { useSelector } from "react-redux";

export default function Users() {
  const user_state = useSelector((store) => store.users.users);
  console.log(user_state);
  return <div className="w-[300px] hidden md:flex md:flex-wrap">
    {user_state?.map((each) => <img src={each.photo} key={each._id} className="bg-white w-[150px] h-[150px] object-cover"/>)}
    </div>;
}
