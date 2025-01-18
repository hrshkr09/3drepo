import React, { useRef , useState} from 'react';
import TiltText from '../components/TiltText';
import Page1Bottom from '../components/Page1Bottom';
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
const Page1 = () => {

  const tiltRef = useRef(null)
  const [xVal, setXVal]= useState(0)
  const [yVal, setYVal]= useState(0)

  const mouseMoving = (e)=>{
    
      // console.log(tiltRef.current.getBoundingClientRect().width ); // helps in finding the dimension
      
      setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/40)
      setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10)
     
  }

  useGSAP(function (){
    gsap.to(tiltRef.current, {
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 1,
      
    })
  },[xVal,yVal])

  return (
    <div id="page1" onMouseMove={(e)=>{
        mouseMoving(e)
    }} className='h-screen p-5 relative bg-white'>
      <div id="page1-in" className='h-full w-full relative shadow-xl py-10 px-20 shadow-gray-700 bg-cover bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2978,h_1398,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] rounded-[50px]'>
        <img className="h-26 " src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="logo" />
        <div  id="tiltDiv" ref={tiltRef} className="mt-[12vh]">
      <h1 className="text-[4vw] leading-[4vw] uppercase font-[anzo1]">
        I AM <span className="text-black">DARK MODE</span>™
      </h1>
      <h1 className="text-[6.5vw] leading-[7vw] font-[anzo1]">DESIGNER</h1>
      <h1 className="text-[4vw] leading-[4vw] font-[anzo1]">TO HIRE</h1>
    </div>
        <Page1Bottom/>
      </div>
    </div>
  );
}

export default Page1;
