import { Link as Anchor} from 'react-router-dom'
export default function CityDetails( {city, featuredLocation}) {
  
  return (
    <>
        <div className="flex self-center">
            <div className="flex flex-col items-center justify-center gap-8">
                <h2 className="text-6xl text-[white] font-bold rounded-lg p-2">
                    {city}
                </h2>
                <p className="text-lg italic font-semibold text-center w-[70%]">
                    {featuredLocation}
                </p>
                <Anchor to="/cities" className="text-xl font-semibold bg-gray-100 shadow-xl rounded-lg p-2">
                    Go back
                </Anchor>
            </div>
        </div>
    </>
  );
}
