import { Link as Anchor } from 'react-router-dom'

export default function ButtonCallTo() {
  return (
    <>
        <Anchor to="/cities" className="flex py-4 px-5 justify-center gap-1 items-center bg-[#4F46E5] border-2 border-[#4F46E5] rounded-full text-2xl 
        font-semibold text-white md:w-2/4">View More
        </Anchor >     
    </>
  );
}