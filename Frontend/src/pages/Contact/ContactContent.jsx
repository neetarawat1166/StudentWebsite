import React from 'react'
import ContactForm from './ContactForm'

const ContactContent = () => {
  return (
    <div className='section lg:py-[20px] mt-6'>
       <div className="flex flex-col items-center px-[2rem] sm:px-[4rem] md:px-[2rem] lg:px-[8rem] gap-[1rem] sm:gap-[2rem] text-[#252525]">
      <h1 className="sm:text-[3rem] pt-4 text-[30px] font-semibold text-[#003366]">Stay Connected...</h1>
      <p className='sm:text-[25px] text-[16px]'>Stay connected with us! For any inquiries or assistance, feel free to reach out by filling out the following form</p>
      <div className="flex flex-col md:grid grid-cols-2 gap-[2rem] lg:gap-[4rem]">
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.369705976298!2d75.81505627540564!3d26.796354365081456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dd843e8569%3A0x3ca300c92f297221!2sUpflairs%3A%20Best%20Machine%20Learning%2C%20Data%20Science%2C%20AI%2C%20DevOps%2C%20Cloud%2C%20IOT%2C%20Embedded%20Systems%20Training!5e0!3m2!1sen!2sin!4v1711020218486!5m2!1sen!2sin"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-full h-[15rem] sm:h-[20rem] md:h-[90%]"
          ></iframe>
        </div>
        <ContactForm/>  
      </div>
    </div>
    </div>
  )
}

export default ContactContent