import Header from "../Header/Header.jsx";

export default function Banner({ src }) {
  src = "https://i.postimg.cc/k44KbsJH/indigo-blue-3727660-1280-1.jpg";
  return (
    <>
      <div
        className="bg-center bg-no-repeat bg-cover h-2/5"
        style={{ backgroundImage: `url(${src})` }}
      >
        <Header />
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-4xl text-black font-bold">Cities</h2>
            <p className="text-2xl text-black font-semibold text-center mb-4">
              Collection of the most beautiful places and experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
