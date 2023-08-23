import { Link as Anchor } from 'react-router-dom'

export default function ButtonCallTo() {
  return (
    <>
        <Anchor to="/cities" className="flex py-3 px-6 justify-center items-center bg-[#4F46E5]
        rounded-full text-2xl font-bold text-white md:w-1/2">
            View More
        </Anchor >     
    </>
  );
}
