import Header from '../Header/Header.jsx';

export default function Banner(src) {
  return (
    <>
        <div className="bg-center bg-no-repeat bg-cover h-2/5" style={{backgroundImage:`url(${src})`}}>
            <Header />
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center gap-10">
                    <h2 className='text-4xl text-black font-bold'>Cities</h2>
                    <p className='text-xl text-black'>Collection of the most beautiful places and experience</p>
                </div>
            </div>
        </div>
    </>
  );
}
