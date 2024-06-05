import React from 'react'

const AboutQuoteCard = ({ quote }) => {
    return (
        <>
            <div className="flex justify-center items-center p-16">
                <h5 className='text-[23px] font-[500] italic'>"{quote}"</h5>
            </div>
        </>
    )
}

export default AboutQuoteCard
