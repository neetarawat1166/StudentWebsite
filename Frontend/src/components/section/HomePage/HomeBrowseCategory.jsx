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
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">Browse By Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-10">
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
