import React from 'react'
import img from '../../images/contact.jpeg'
const ContactBanner = () => {
  return (
    <div className="relative py-10 md:py-[10rem] mb-14 px-4 md:px-10 lg:px-96">
      {/* <div className="bg-[#2525252d] h-[400px] w-full opacity-60	z-20 absolute top-0 left-0"></div> */}
      <img
        className="w-full h-[400px] object-cover absolute top-0 left-0 z-10"
        src={img}
        alt=""
      />
    </div>
  )
}

export default ContactBanner