import React from 'react';
import Syllabus from '../../components/common/Syllabus'; // Importing the Syllabus component

const FullStackSyllabus = () => {
  // Define topics here
  const topics = [
    {
      heading: "HTML",
      subtopics: [
        "Understanding Websites: A Primer",
        "Introduction HTML: An Overview",
        "Exploring Text Editors and Extensions",
        "Navigating Frontend and Backend Development",
        "HTML4 vs HTML5: Evolution and Comparison",
        "Decoding Tags, Attributes, and Elements",
        "Mastering Headings, Paragraphs, and Anchor Tags",
        "Image, Line Break, and Essential Tags",
        "Organizing Content with Lists (OL, UL, DL)",
        "Harnessing the Power of HTML Forms",
        "Crafting Tables for Structured Data Presentation",
        "Unveiling the Roles of Div and Span Elements",
        "Optimizing Metadata with Meta Tags"
      ]
    },
    {
      heading: "GITHUB",
      subtopics: [
        "Understanding GitHub",
        "Setting Up Your GitHub Account",
        "Establishing a Repository",
        "Importing Code into GitHub"
      ]
    },
    {
      heading: "CSS",
      subtopics: [
        "Understanding CSS",
        "Varieties of CSS",
        "Integrating CSS with HTML",
        "Formatting Text with CSS",
        "Exploring Fonts in CSS",
        "Mastering the Box Model",
        "Crafting Borders with CSS",
        "Selectors: IDs and Classes",
        "Harnessing the Power of Color in CSS",
        "Handling Overflow and Shadows",
        "Exploring Advanced CSS Positions",
        "Expanding Your CSS Repertoire: More Properties"
      ]
    },
    {
      heading: "CSS ADVANCE",
      subtopics: [
        "Advanced CSS Techniques",
        "Display Properties",
        "Z-index Transformation",
        "Transition Effects",
        "2D Transformations",
        "3D Transformations",
        "CSS Animation",
        "Media Queries"
      ]
    },
    {
      heading: "JAVASCRIPT",
      subtopics: [
        "Understanding JavaScript",
        "Declaring Variables: var, let, and const",
        "Data Types in JavaScript",
        "Operators in JavaScript",
        "Conditional Statements",
        "Looping Constructs",
        "Functions in JavaScript",
        "Working with Arrays",
      ]
    },
    {
      heading: "JAVASCRIPT ADVANCE",
      subtopics: [
        "Time and Date Management",
        "DOM (Document Object Model)",
        "Entities and Classifications in Programming",
        "Object-Oriented Programming (OOP) Principles",
        "Data Validation Techniques",
        "Asynchronous Promise Handling",
        "Understanding the \"this\" Keyword in Context",
        "Browser Cookie Management"
      ]
    },
    {
      heading: "BOOTSTRAP",
      subtopics: [
        "Understanding Bootstrap",
        "Crafting Responsive Websites",
        "Framework vs. Library: Making the Right Choice",
        "Integrating Bootstrap into Your Project",
        "Harnessing the Power of Containers",
        "Navigating the Grid System: Sizing Matters",
        "Elevating Design with Button Styles",
        "Enhancing User Interaction with Forms",
        "Structuring Data with Tables",
        "Optimizing Visuals with Images",
        "Simplifying Navigation with Pagination",
        "Tracking Progress with Progress Bars",
        "Enhancing User Experience with Dropdown Menus",
        "Incorporating Multimedia: The GIF Advantage"
      ]
    },
    {
      heading: "REACT JS",
      subtopics: [
        "React Overview",
        "MERN vs MEAN Comparison",
        "Server and Configuration Setup",
        "Installation of Node.js",
        "Create React App (CRA)",
        "Pros and Cons of React",
        "Understanding React Components",
        "Introduction to JSX",
        "Managing Events in React",
        "Constructor in React",
        "Arrow Functions in React",
        "Building Forms in React",
        "Project 11: Implementation",
        "Styling and Bootstrap Integration",
        "Routing in React Applications",
        "Exploring React Hooks",
        "Introduction to Redux"
      ]
    },
    {
      heading: "NODE JS",
      subtopics: [
        "Node.js Essentials",
        "Installation of Node.js",
        "CLI vs GUI Comparison",
        "REPL vs NPM Usage",
        "Managing Node Modules",
        "HTTP Operations",
        "Operating System Interactions",
        "Cryptography in Node.js",
        "File Upload Functionality",
        "Email Communication with Node.js"
      ]
    },
    {
      heading: "EXPRESS JS",
      subtopics: [
        "Node & Express: Crafting Web Applications ",
        "Connecting Node to Express: Establishing the Link",
        "Request Handling: Managing Client Interactions",
        "GET and POST Methods: Leveraging HTTP Operations",
        "Middleware: Enhancing Node & Express Functionality",
        "File Upload: Managing Data Transfer",
      ]
    },
    {
      heading: "MONGODB",
      subtopics: [
        "MongoDB Overview",
        "SQL vs NoSQL: A Comparative Analysis",
        "Relational Database Management Systems (RDBMS)",
        "Creating Databases",
      ]
    }
  ];

  return (
    <>
      <Syllabus topics={topics} courseHeading="Full Stack Web Development Course" />
    </>
  );
};

export default FullStackSyllabus;
