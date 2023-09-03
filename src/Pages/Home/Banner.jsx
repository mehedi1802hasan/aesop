import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Banner = () => {
  return (
    <div className="bg-cover bg-center h-screen relative z-10" style={{ backgroundImage: 'url("https://i.ibb.co/TvD9BC2/Aesop-Bar-Soaps-2023-Web-Homepage-2-Primary-Full-Bleed-Desktop-2880x1044px.jpg")' }}>
     <div>
     <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-between">
     <div className='flex gap-5 ml-9'>
        <h1 className="text-4xl text-white font-bold">Aesop</h1>
        <div className='text-white mt-4'>
        <h3 className='mb-3'> Bar Soap</h3>
        <h4 className='mb-3 text-3xl'>A body care classic,<br /> reimagined</h4>
        <h4 className='mb-6 text-xl '>Breathing new life into the humble bar soap are <br /> Nurture, Polish and Refresh—three additions to the <br /> range, each imparting a unique constellation of <br /> benefits.</h4>
        <button className=' flex  items-center gap-5  px-14 py-4  border-2 border-red hover:bg-white hover:text-black'>Discover Bar Soups <span><AiOutlineArrowRight></AiOutlineArrowRight></span></button>
        </div>
        </div>
     <div><h1 className="text-4xl text-red-500 font-bold"></h1></div>

      </div>
     </div>
    </div>
  );
};

export default Banner;
