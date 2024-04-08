import React from 'react';
import LearnGrowImg1 from '../../images/LearnGrowImg1.webp'
import LearnGrowImg2 from '../../images/LearnGrowImg2.webp'
import LearnGrowImg3 from '../../images/LearnGrowImg3.webp'
const LearnGrowSection = () => {
  return (
    <div className="container mx-auto px-[50px] py-[50px] relative">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex">
          <div className="w-1/2 flex flex-col justify-center gap-5 z-10">
            <img src={LearnGrowImg1} alt="LearnGrowImg1" className='mx-auto' width="230px" height="auto" />
            <img src={LearnGrowImg2} alt="LearnGrowImg2" className='mx-auto' width="230px" height="auto" />
            <img src="data:image/png;base64,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" 
            alt=""
            className="absolute inset-0 object-cover z-0"
            style={{ animation: 'moveBackground 5s infinite alternate' }}
            />
          </div>
          <div className="w-1/2 flex items-center justify-center z-10">
            <img src={LearnGrowImg3} alt="LearnGrowImg3" className='mr-[90px]' width="340px" height="auto" />
          </div>
        </div>
        <div className="lg:w-1/2 justify-center items-center">
          <h2 className='text-4xl font-semibold'>Lorem ipsum dolor, sit amet sit amet consectetur adipisicing.</h2>
          <p className='w-[75%] text-lg pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit incidunt non tempora nobis blanditiis numquam impedit sed harum nam quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, at odio alias vel voluptas debitis fuga? Ipsam, nemo! Maiores, molestias.</p>
        </div>
      </div>
    </div>
  );
};

export default LearnGrowSection;
