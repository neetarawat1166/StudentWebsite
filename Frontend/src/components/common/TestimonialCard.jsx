import React from 'react'
import img1 from '../../images/girl.avif'

const TestimonialCard = () => {
  return (
   <>
        <div className="flex justify-center items-center gap-4 mt-5">
        <img className="h-20 w-20 object-cover rounded-full bg-gray-200" src={img1} alt="Your Image" />
        <div>
        <h1 className="text-lg font-semibold">Priya Sharma</h1>
        <h2 className="text-sm">Banasthali Vidyapith</h2>
        </div>
    </div>
    <div className='p-5 text-[16px]'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa est natus doloribus alias labore incidunt nemo! Non vel quibusdam unde, iste quas corporis a perspiciatis! Quos magni iste mollitia libero.
    </div>
   </>
  )
}

export default TestimonialCard