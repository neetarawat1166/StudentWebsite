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
    icon: <HiCheckBadge className='text-[#65bc7b] size-6' />,
    title: "World class trainers",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente neque dignissimos commodi laborum? Sed cum, eius eaque repudiandae est delectus?"
  },
  {
    icon: <HiCheckBadge className='text-[#65bc7b] size-6'/>,
    title: "World class trainers",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente neque dignissimos commodi laborum? Sed cum, eius eaque repudiandae est delectus?"
  },
  {
    icon: <HiCheckBadge className='text-[#65bc7b]  size-6' />,
    title: "World class trainers",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente neque dignissimos commodi laborum? Sed cum, eius eaque repudiandae est delectus?"
  },
  {
    icon: <HiCheckBadge className='text-[#65bc7b] size-6'/>,
    title: "World class trainers",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente neque dignissimos commodi laborum? Sed cum, eius eaque repudiandae est delectus?"
  }
]

const Benefits = () => {
  return (
    <>
      <div className='section py-[50px]'>
        <div className='relative'>
          <div className=' animate-bgmove2 absolute md:left-[500px]  hidden md:block box-border'>
              <img src={img1} alt="Benefits" className=''/>
          </div>
          <div className='container mx-auto p-10'>
            <div className='grid  lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-6 items-center'>
              <div className='mb-[30px] xl:col-span-2 col-span-3'>
                  <div>
                      <div className='mb-[30px]'>
                        <span className='inline-block mb-[25px] bg-[#65bc7b] rounded-lg p-2 text-white'>WHY CHOOSE US</span>
                        <h4 className='text-[27px] font-bold'>
                          Creating A Community Of Life Long
                          <span className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#65bc7b]'> Learners</span>
                        </h4>
                      </div>
                      {/* start from here */}
                      <div className='pb-[15px]'>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid, dolorem iure molestiae dolores voluptatibus sit voluptatum architecto similique adipisci.
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
                      <img src={img3} alt="" className='absolute top-[-5%]  left-[-5%] -z-50 block box-border' />
                      
                      
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