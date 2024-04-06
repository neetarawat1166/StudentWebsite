import React from 'react'
import img1 from '../../../images/benedes1.png'

const Benefits = () => {
  return (
    <>
      <div className='section py-[50px]'>
        <div className='relative pt-[180px] pb-[110px]'>
          <div className='absolute duration-1000 ease-linear running infinite delay-0 alternate none  hidden md:block translate-x-0 box-border'>
              <img src={img1} alt="Benefits" />
          </div>
          <div className='container'>
            <div className='grid items-center'>
              <div className='grid-cols-6 mb-[30px]'>
                  <div>
                      <div className='mb-[30px]'>
                        <span className='inline-block mb-[25px] bg-[#65bc7b] rounded-lg p-2'>WHY CHOOSE US</span>
                        <h4 className='font-[700px] mb-0 text-[27px]'>
                          Creating A Community Of Life Long
                          <span className='text-[#65bc7b]'> Learners</span>
                        </h4>
                      </div>
                      {/* start from here */}
                      <div className=''>

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