import React from 'react';
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='absolute w-full  flex items-center justify-end z-10 py-20 px-20'>
      <button className='bg-black border-4 text-xl  px-6 py-2 hover:bg-gray-500 rounded-full'>Hire me</button>
      <i className="ri-more-2-fill text-4xl ml-3"></i>
    </div>
  );
}

export default Header;
