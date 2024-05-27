import React from 'react'
import img1 from '../../../images/benedes1.png'
import img2 from '../../../images/benedes6.webp'
import img3 from '../../../images/benedes3.png'
import img4 from '../../../images/benedes4.png'
import img5 from '../../../images/benedes5.png'
import BenefitsCard from './BenefitsCard';
import { HiCheckBadge } from "react-icons/hi2";
import '../../style/NeetaStyle/style2.css'

const BenefitContent = [
  {
    icon: <HiCheckBadge className='text-[#ff9416] size-6' />,
    title: "Tailored Solutions",
    para: "We understand that every individual has unique needs and goals. That's why we offer customized solutions designed to address your specific challenges effectively."
  },
  {
    icon: <HiCheckBadge className='text-[#ff9416] size-6'/>,
    title: "Commitment to Excellence",
    para: "We are committed to excellence in everything we do, ensuring that you receive the highest quality service and support at every step of your journey with us."
  },
  {
    icon: <HiCheckBadge className='text-[#ff9416]  size-6' />,
    title: "Transparent Communication",
    para: "We believe in transparent communication, keeping you informed and involved throughout the process, so you know exactly what to expect."
  },
  {
    icon: <HiCheckBadge className='text-[#ff9416] size-6'/>,
    title: "Continuous Support",
    para: "Our support doesn't end with the completion of a project. We provide continuous support and guidance to help you navigate challenges and seize opportunities."
  }
]

const Benefits = () => {
  return (
    <>
      <div className='section py-[50px] relative z-[-1] bg-[#d9e7ff]'>
        <div className='relative'>
          <div className=' animate-bgmove2 absolute md:left-[500px]  hidden md:block box-border'>
              <img src={img1} alt="Benefits" className=''/>
          </div>
          <div className='container mx-auto p-10'>
            <div className='grid  lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-6 items-center'>
              <div className='mb-[30px] xl:col-span-2 col-span-3'>
                  <div>
                      <div className='pb-[10px]'>
                        <span className='inline-block mb-[20px] bg-[#003366] rounded-lg p-2 text-white'>WHY CHOOSE US</span>
                        <h4 className='text-[27px] font-bold'>
                        <span className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#ff9416]'>Experience </span>
                         customized solutions catered to Your Every Requirement, Delivering Outstanding Value and Results.
                        </h4>
                      </div>
                      {/* start from here */}
                      <div className='pb-[15px]'>
                        <p>
                        At Upflairs, we tailor solutions to your unique needs, ensuring effective results. With our proven success, trust us to guide you through challenges and opportunities in the tech field. Count on our commitment to excellence and unwavering support every step of the way.
                        </p>
                      </div>
                        <div>
                          <div className='grid md:grid-cols-2 gap-4 grid-cols-1'>
                            {
                              BenefitContent.map((item) => {
                                return(
                                  <div>
                                    <BenefitsCard icon={item.icon} title={item.title} para={item.para}/>
                                  </div>
                                )
                              })
                            }
                          </div>
                        </div>   
                  </div>
              </div>

              {/* here */}
              <div className='mb-[30px] xl:col-span-1 relative xl:block hidden'>
                <div className=''>
                  <div className=''>
                      <img src={img2} alt="benefits" className='lg:h-[540px] w-[100%] object-cover'/>
                      <img src={img4} alt="" className='absolute top-[-5%]  left-[-5%] -z-50 block box-border rotate-[180.8deg]' />
                      
                      
                        <img src={img4} alt="" className=' absolute bottom-[-5%] lg:right-[-5%] -z-50 block box-border'/>
                       
                      <img src={img5} alt="" className='animate-bgmove absolute -z-50  top-[-5%] lg:right-[-5%]  block box-border'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefits