import React from 'react';
import TiltText from '../components/TiltText';
import Page1Bottom from '../components/Page1Bottom';

const Page1 = () => {
  return (
    <div className='h-screen p-7  bg-white'>
      <div className='h-full w-full shadow-xl p-20 shadow-gray-700 bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2978,h_1398,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] rounded-[50px]'>
        <img className="h-26 ml-10" src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="logo" />
        <TiltText/>
        <Page1Bottom/>
      </div>
    </div>
  );
}

export default Page1;
