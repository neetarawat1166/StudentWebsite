import React from 'react'

const BenefitsCard = ({icon, title, para}) => {
  return (
    <>
    
    <div>
        <div className='rounded-sm p-5 bg-[#eeeeee] shadow-md shadow-[#ff9416]'>
            <div className='flex gap-1'>
                {icon}
                <span className='font-semibold text-[18px]'>{title}</span>
            </div>
            <p>{para}</p>
        </div>
    </div>
    
    </>
  )
}

export default BenefitsCard