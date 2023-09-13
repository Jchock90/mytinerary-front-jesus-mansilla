import { Link as Anchor } from "react-router-dom";

export default function FooterCities() {
  return (
    <>
      <Anchor
        to="/cities"
        className="text-xl font-semibold text-[#1C1C1C] rounded-lg px-4 py-2"
      >
        Cities
      </Anchor>
    </>
  );
}
