import React from 'react'
import ctaBG from '../../images/CTABG.jpg'
import des1 from '../../images/ctades1.png'
import des2 from '../../images/ctades2.png'
import des3 from '../../images/ctades3.png'
import des4 from '../../images/ctades4.png'
import des5 from '../../images/ctades5.png'
import { NavLink } from "react-router-dom";

const CTA = () => {
  return (
    <>
        <div className='bg-cover bg-no-repeat h-full relative py-[50px] md:py-[100px] z-50' style={{backgroundImage:`url(${ctaBG})`}}>
                <div className='absolute top-0 left-0 w-full h-full bg-[#0f124bc2]'></div>
                <div className='absolute top-0 right-0 hidden lg:block'>
                    <img src={des1} alt="CTA" />
                </div>
                <div className='absolute top-0 right-0 hidden lg:block'>
                    <img src={des2} alt="CTA" />
                </div>
                <div className=' hidden lg:block absolute top-[30px] left-[55px] animate-spin duration-1000 linear delay-0 infinite normal none running'>
                    <img src={des3} alt="CTA" />
                </div>
                <div className='absolute bottom-[90px] left-[40%] animate-spin linear duration-1000 delay-0 running normal none infinite  hidden lg:block'>
                    <img src={des4} alt="CTA" />
                </div>
                <div className='absolute right-[173px] bottom-[200px] animate-spin linear duration-1000 delay-0 running normal none infinite  hidden lg:block'>
                    <img src={des5} alt="CTA" />
                </div>

                <div class='text-center z-50 relative'>
                    <h2 class='text-white font-semibold lg:text-[65px] sm:text-[40px] text-[30px]'>Let's learn to manage!</h2>
                    <h3 class='text-white lg:text-[20px] md-[]'>Need help? Click below for support!</h3>
                    <NavLink to={'/contact'}><button class='bg-white p-2 rounded-lg font-serif mt-5 text-[20px] hover:bg-[#65bc7b] hover:text-white mb-2'>Contact us</button></NavLink>
                </div>
        </div>
    </>
  )
}

export default CTA