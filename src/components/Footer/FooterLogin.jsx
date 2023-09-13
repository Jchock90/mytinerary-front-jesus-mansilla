import { Link as Anchor } from "react-router-dom";

export default function FooterLogin() {
  return (
    <>
      <Anchor
        href="./"
        className="text-xl font-semibold text-[#1C1C1C] rounded-lg px-4 py-2"
      >
        Login
      </Anchor>
    </>
  );
}
