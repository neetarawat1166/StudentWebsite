import React from 'react';
import BrowseCategoryCard from '../../common/BrowseCategoryCard';
import browseCategoryImg1 from '../../../images/browseCategoryImg1.png';
import { IoNewspaper } from "react-icons/io5";

const HomeBrowseCategory = () => {
  // Sample data for categories
  const categories = [
    {
      name: 'Category 1',
      icon: IoNewspaper,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing elit. Dolorum, facilis!"
    },
    {
      name: 'Category 2',
      icon: IoNewspaper,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing elit. Dolorum, facilis!"
    },
    {
      name: 'Category 3',
      icon: IoNewspaper,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing elit. Dolorum, facilis!"
    },
    {
      name: 'Category 4',
      icon: IoNewspaper,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing amet consectetur adipisicing elit. Dolorum, facilis!"
    }
  ];

  return (
    <div className="px-5 py-5 md:px-10 md:py-10 lg:px-2 lg:py-20">
      <h1 className="text-3xl md:text-4xl text-[#003366] lg:text-5xl font-bold pb-3 text-center">BROWSE BY CATEGORIES</h1>
      <hr className="border-t-4 border-[#ff9416] w-32 mx-auto mb-10" />
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <BrowseCategoryCard
            key={index}
            categoryName={category.name}
            icon={category.icon}
            categoryDesc={category.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBrowseCategory;
