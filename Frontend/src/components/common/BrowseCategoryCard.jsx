import React from 'react';

const BrowseCategoryCard = ({ icon ,categoryName, categoryDesc}) => {
  const Icon = icon;

  return (
    <div className="group bg-[#faead8] border-2 border-[#003366] hover:border-4 mx-auto lg:justify-between rounded-lg pt-10 px-5 w-[300px] md:w-[350px] lg:w-[500px] xl:w-[310px] text-center hover:bg-[#003366] hover:border-[#ff9416] transition-colors duration-500 ease-in-out shadow-md shadow-[#003366] cursor-pointer">
      <div className="rounded-full w-[100px] h-[100px] flex items-center justify-center mx-auto border-2 border-dashed border-[#003366] group-hover:border-white">
      <div className="bg-[#ff9416] rounded-full w-[90px] h-[90px] flex items-center justify-center mx-auto group-hover:bg-white">
        <Icon className="text-[#003366] text-[50px] group-hover:text-[#ff9416]" />
      </div>
      </div>
      <div className="pt-6 pb-5">
        <p className="text-xl text-[#003366] font-semibold group-hover:text-white">{categoryName}</p>
        <p className='pt-4 pb-6 text-[#003366] group-hover:text-white'>{categoryDesc}</p>
      </div>
    </div>
  );
};

export default BrowseCategoryCard;
