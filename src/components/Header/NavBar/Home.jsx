import { Link as Anchor } from 'react-router-dom';

export default function Home() {
  return (
    <>
        <Anchor to="/" className="text-2xl font-bold text-[#1C1C1C] rounded-lg px-4 py-2">
            Home
        </Anchor>
    </>
  );
}
