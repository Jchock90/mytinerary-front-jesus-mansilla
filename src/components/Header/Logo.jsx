export default function Logo({ src, name }) {
  return (
    <>
      <div className="flex w-3/4">
        <div className="flex items-center bg-cover h-[9.8rem]">
          <h2 className="flex font-bold text-[#1C1C1C] xl:text-4xl text-3xl">
            {name}
          </h2>
        </div>
      </div>
    </>
  );
}
