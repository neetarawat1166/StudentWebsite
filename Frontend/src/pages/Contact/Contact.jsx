import React from 'react'
import ContactBanner from './ContactBanner'
import ContactContent from './ContactContent'
import ContactDetail from './ContactDetail'
const Contact = () => {
  return (
    <>
      <div className="section">
        <div className="hidden lg:block">
          <ContactBanner/>
        </div>
        <ContactContent/>
      </div>
      <div className='lg:mb-10 mb-4'>
        <ContactDetail/>
      </div>

    </>
  )
}

export default Contact