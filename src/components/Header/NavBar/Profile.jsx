import { Link as Anchor } from "react-router-dom";

export default function Login() {
  return (
    <>
      <button className="bg-[#4F46E5] rounded-lg py-2 px-4">
        <Anchor
          to="/profile"
          className="flex justify-between items-center gap-4 text-2xl text-white"
        >
          Profile
        </Anchor>
      </button>
    </>
  );
}
