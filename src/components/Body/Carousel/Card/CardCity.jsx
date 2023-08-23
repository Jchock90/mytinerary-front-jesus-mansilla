import ButtonViewMore from './ButtonViewMore'
import LocationNames from './LocationNames';

export default function CardCity({ src, city, country, id }) {
  return (
    <>
      <div className='flex flex-col w-[80%] h-64 justify-between bg-center bg-no-repeat 
        shadow-2xl bg-cover rounded-md md:w-1/3 md:h-64 lg:w-1/4 lg:h-64'
        style={{backgroundImage:`url(${src})`}} >
            <LocationNames city={city} country={country} />
            <ButtonViewMore id={id} />
      </div>
    </>
  );
}