import React from 'react'

const Attendance = () => {
  return (
    <>
    
        <div className='section'>
            <h1 className='text-[35px] text-[#252525] font-semibold text-center py-5'>Attendance</h1>
            <div className='container mx-auto bg-[#eeeeee]  py-[10px] text-center text-[#252525] w-full rounded-lg  '>
                <h1 className='text-[18px] sm:text-[30px] md:text-[23px] lg:text-[30px] font-semibold'>Full Stack Web Development</h1>
                <div className='flex justify-center items-center  gap-8 text-[18px] sm:text-[30px] md:text-[23px] lg:text-[30px] font-semibold'> 
                    <h2 className='py-4'>Currently</h2>
                    <div className='flex justify-center items-center'>
                        <h2>15</h2>
                        <h2>/</h2>
                        <h2>30</h2>
                    </div>
                </div>

            </div>
        </div>
    
    </>
  )
}

export default Attendance