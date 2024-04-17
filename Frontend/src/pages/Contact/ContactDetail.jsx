import React from 'react'
import ctaBG from '../../images/Contactbg.avif'
import des3 from '../../images/ctades3.png'

const ContactDetail = () => {
  return (
    <>   
        <div className='section bg-cover bg-no-repeat h-full relative py-[50px] md:py-[80px] z-50' style={{backgroundImage:`url(${ctaBG})`, backgroundPosition:"center"}}>
                <div className='absolute top-0 left-0 w-full h-full bg-[#141415b7]'></div>
            
                <div className=' hidden lg:block absolute top-[30px] lg:left-[20px] xl:left-[160px] animate-spin duration-1000 linear delay-0 infinite normal none running'>
                    <img src={des3} alt="CTA" />
                </div>
                <div className=' hidden lg:block absolute top-[120px] lg:left-[90%] xl:left-[85%] animate-spin duration-1000 linear delay-0 infinite normal none running'>
                    <img src={des3} alt="CTA" />
                </div>
               
                <div class='conatiner flex justify-center items-center text-white z-50 relative'>
                   <div className='grid md:grid-cols-3 md:gap-40 gap-16 grid-cols-1'>
                        <div className='text-center  hover:text-[#65bc7b]'>
                            <p className='lg:text-[25px] text-[18px] font-semibold'>+91 9351494002</p>
                            <p className='lg:text-[20px] text-[16px]'>Siddhart Singh</p>
                            <p className='text-[15px]'>Founder & Director</p>
                        </div>
                        <div className='text-center hover:text-[#65bc7b]'>
                            <p className='lg:text-[25px] text-[18px] font-semibold '>+91 9785956294</p>
                            <p className='lg:text-[20px] text-[16px]' >Vikram Singh</p>
                            <p className='text-[15px]'>Chief Marketing</p>
                        </div>
                        <div className='text-center lg:text-[25px] text-[18px] font-semibold hover:text-[#65bc7b]'>
                            <p className='lg:text-[25px] text-[18px] font-semibold'>+91 9509957594</p>
                            <p className='lg:text-[20px] text-[16px]'>Ashutoshh Singh</p>
                            <p className='text-[15px]'>Chief Tehnical Officer</p>
                        </div>
                   </div>
                </div>
        </div>
    </>
  )
}

export default ContactDetail