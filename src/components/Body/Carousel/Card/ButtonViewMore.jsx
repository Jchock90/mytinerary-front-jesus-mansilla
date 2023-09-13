import { Link as Anchor } from "react-router-dom";
export default function ButtonViewMore({ id }) {
  return (
    <>
      <Anchor
        to={"/" + id}
        className="bg-[#4F46E5] flex justify-center text-white w-[55%] ml-2 mb-2 rounded-md"
      >
        <p>View More</p>
      </Anchor>
    </>
  );
}
