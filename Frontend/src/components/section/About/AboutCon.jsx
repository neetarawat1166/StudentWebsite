// import React from 'react';
// import img from '../../../images/AboutConImg.jpg';

// const AboutCon = () => {
//   return (
//     <section className='py-8 md:py-12 lg:py-16'>
//       <div className='container grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 lg:px-16 gap-8'>
//         {/* Left half for image */}
//         <div className=''>
//           <img className='w-full h-auto' src={img} alt='AboutUs' />
//         </div>
//         {/* Right half for content */}
//         <div className='flex flex-col justify-center'>
//           <h2 className='text-3xl md:text-4xl lg:text-5xl text-[#65bc7b] font-bold pb-4 md:pb-6'>We are EduEmpower...</h2>
//           <p className='text-base md:text-lg lg:text-xl'>
//             Fugit, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim blanditiis facere necessitatibus eos similique nemo beatae nam dicta rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vitae dolor dolorum, debitis blanditiis, numquam voluptatum eligendi inventore illo doloribus nobis omnis nostrum reiciendis, fugiat similique vel esse sint unde tenetur nam dolores repellendus excepturi veniam! Dolore natus rem ducimus quasi harum itaque error optio veniam recusandae? Nesciunt, dolorum molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, culpa quas provident vel eveniet distinctio cum maiores enim soluta voluptatum hic tempore nobis, asperiores id amet officia aliquid odit facere. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla, omnis voluptatum atque laudantium eius consequatur sed harum tempore quis!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutCon;

import React from "react";
import img from "../../../images/AboutConImg.png";

const AboutCon = () => {
  return (
    <section className="py-[50px] md:px-[20px] lg:px-[0px]">
      <div className="container flex flex-col md:flex-row justify-center mx-auto px-4 md:px-6 lg:px-4 xl:px-11 gap-4 md:border-[#65bc7b] md:border-2 lg:border-0">
        {/* Left half for image */}
        <div className="w-full md:hidden lg:flex lg:items-center lg:w-[45%]">
          <img className="w-full h-auto mx-auto" src={img} alt="AboutUs" />
        </div>
        {/* Right half for content */}
        <div className="w-full md:w-full lg:w-[55%] flex flex-col justify-center md:p-8">
          <h2 className="text-3xl md:text-4xl lg:text-[45px] text-[#003366] pb-2 font-bold md:pb-2 lg:pb-5 md:text-center lg:text-start">
            We are Upflairs...
          </h2>
          <p className="text-base md:text-lg lg:text-sm xl:text-[1.2rem]">
            UpFlairs is an innovative educational technology company dedicated
            to empowering students across India. At UpFlairs, our mission
            transcends conventional education paradigms. We are architects of
            empowerment, striving to ignite the potential of students across
            India and beyond. Through our dynamic curriculum, which encompasses
            the forefront of technological advancement including Artificial
            Intelligence (AI), Machine Learning (ML), Data Science, Cloud
            Computing, DevOps, Full Stack Web Development, Embedded Systems,
            Internet of Things (IoT), and Robotics, we equip learners with the
            tools to navigate and excel in the digital age. With a track record
            of enriching the lives of over 50,000 students worldwide, our impact
            reverberates through prestigious institutions such as the Indian
            Institutes of Technology (IITs) and National Institutes of
            Technology (NITs). What sets us apart is our unwavering commitment
            to fostering not only academic excellence but also practical,
            real-world proficiency.We bridge theory and practice with advanced
            lab setups for schools and tailored project solutions for
            businesses, breaking traditional boundaries. At UpFlairs, we are
            architects of transformation, architects of empowerment, and
            architects of a future where technology serves as the catalyst for
            boundless opportunity and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCon;
