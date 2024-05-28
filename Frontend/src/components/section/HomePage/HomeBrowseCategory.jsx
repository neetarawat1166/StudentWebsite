import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import BrowseCategoryCard from '../../common/BrowseCategoryCard';
import { RiDashboardFill } from "react-icons/ri";
import { MdAssignment } from "react-icons/md";
import { GiBookCover } from "react-icons/gi";
import { IoNewspaper } from "react-icons/io5";
import { isAuthenticatedContext } from '../../../context/userContext';

const HomeBrowseCategory = () => {
  const { user } = useContext(isAuthenticatedContext);

  // Function to handle category click
  const handleCategoryClick = (link) => {
    window.location.href = link; // Redirect to the specified page
  };

  // Sample data for categories
  const categories = [
    {
      name: 'Dashboard',
      icon: RiDashboardFill,
      desc: "On the dashboard, you can access various features related to your classes. You can view your class schedule, check your attendance records, and read any announcements from your instructors or the administration.",
      link: '/dashboard' // Specify the link for dashboard
    },
    {
      name: 'Assignment',
      icon: MdAssignment,
      desc: "In the assignment section, you can view both past and current assignments along with their details and due dates. This comprehensive view helps you stay organized, manage your workload efficiently, and meet all deadlines.",
      link: '/assignment' // Specify the link for assignments
    },
    {
      name: 'Resources',
      icon: GiBookCover,
      desc: "In the resources section, you'll find a diverse array of study materials crafted to align with your courses. These resources encompass PDFs aimed at enriching your learning journey and facilitating academic success.",
      link: '/resources' // Specify the link for resources
    },
    {
      name: 'Syllabus',
      icon: IoNewspaper,
      desc: "In the syllabus, you'll discover a comprehensive outline detailing your enrolled course, encompassing all topics, materials, and learning objectives for the term, providing a structured roadmap for your academic journey.",
      link: ''
    }
  ];

  // Determine syllabus link based on user's course
  let syllabusLink = '';
  if (user) {
    switch (user.course) {
      case "Full Stack Web Development":
        syllabusLink = "/fullstacksyllabus";
        break;
      case "Data Science & Machine Learning with AI":
        syllabusLink = "/datasciencesyllabus";
        break;
      case "Cloud Computing & DevOps":
        syllabusLink = "/cloudcomputingsyllabus";
        break;
      case "Embedded Systems & Robotics with IOT":
        syllabusLink = "/embeddedsystemssyllabus";
        break;
      default:
        syllabusLink = "/syllabus";
    }
  }

  // Update Syllabus category with dynamic link
  categories[3].link = syllabusLink;

  return (
    <div className="px-5 py-5 md:px-10 md:py-10 lg:px-2 lg:py-20">
      <h1 className="text-3xl md:text-4xl text-[#003366] lg:text-5xl font-bold pb-2 text-center">BROWSE BY CATEGORIES</h1>
      <hr className="border-t-4 border-[#ff9416] w-32 mx-auto mb-10" />
      <div className="flex flex-wrap gap-9 justify-center">
        {categories.map((category, index) => (
          <div key={index} onClick={() => handleCategoryClick(category.link)}> {/* Attach click handler to parent div */}
            <BrowseCategoryCard
              categoryName={category.name}
              icon={category.icon}
              categoryDesc={category.desc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBrowseCategory;
