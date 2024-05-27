import React from 'react';

const TestimonialCard = ({ name, college, description, image }) => {
  return (
    <div className='h-[300px]'>
      <div className="flex justify-center items-center gap-4 mt-5">
        <img className="h-20 w-20 object-cover rounded-full bg-gray-200" src={image} alt="Your Image" />
        <div>
          <h1 className="text-lg font-semibold text-[#003366]">{name}</h1>
          <h2 className="text-sm">{college}</h2>
        </div>
      </div>
      <div className='p-5 text-[16px]'>
        {description}
      </div>
    </div>
  );
};

export default TestimonialCard;
