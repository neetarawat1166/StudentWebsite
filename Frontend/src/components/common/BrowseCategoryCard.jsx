import React from 'react';

const BrowseCategoryCard = ({ icon ,categoryName, categoryDesc}) => {
  const Icon = icon;

  return (
    <div className="group bg-[#eeeeee] mx-auto lg:justify-between rounded-lg pt-10 px-5 w-full md:w-[49%] lg:w-[24%] text-center hover:bg-[#65bc7b] transition-colors duration-300 ease-in-out">
      <div className="rounded-full w-[100px] h-[100px] flex items-center justify-center mx-auto border-2 border-dashed border-[#65bc7b] group-hover:border-white">
      <div className="bg-[#65bc7b] rounded-full w-[90px] h-[90px] flex items-center justify-center mx-auto group-hover:bg-white">
        <Icon className="text-white text-[50px] group-hover:text-[#65bc7b]" />
      </div>
      </div>
      <div className="pt-6 pb-5">
        <p className="text-xl font-semibold group-hover:text-white">{categoryName}</p>
        <p className='pt-4 pb-8 group-hover:text-white'>{categoryDesc}</p>
      </div>
    </div>
  );
};

export default BrowseCategoryCard;
