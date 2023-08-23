
export default function CityDetails(city, country, photo) {
  return (
    <>
      <div className="flex justify-center min-h-screen mb-4">
        <div className="flex flex-col items-center grow justify-center gap-4">
            <h2 className="text-2xl font-semibold">{city}</h2>
            <h3 className="text-2xl font-semibold">{country}</h3>
            <img src={photo} alt={city} className="w-2/5 rounded-xl shadow-lg" />
            <p className="text-2xl uppercase">under construction</p>
        </div>
      </div>
    </>
  );
}
