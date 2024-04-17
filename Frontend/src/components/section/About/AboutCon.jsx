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



import React from 'react';
import img from '../../../images/AboutConImg.jpg';

const AboutCon = () => {
  return (
    <section className='py-[50px] md:px-[20px] lg:px-[0px]'>
      <div className='container flex flex-col md:flex-row justify-center mx-auto px-4 md:px-6 lg:px-4 xl:px-11 gap-4 md:border-[#65bc7b] md:border-2 lg:border-0'>
        {/* Left half for image */}
        <div className='w-full md:hidden lg:flex lg:items-center lg:w-[45%]'>
            <img className='w-full h-auto mx-auto' src={img} alt='AboutUs' />
        </div>
        {/* Right half for content */}
        <div className='w-full md:w-full lg:w-[55%] flex flex-col justify-center md:p-8'>
          <h2 className='text-3xl md:text-4xl lg:text-[45px] text-[#65bc7b] pb-2 font-bold md:pb-2 lg:pb-5 md:text-center lg:text-start'>We are EduEmpower...</h2>
          <p className='text-base md:text-lg lg:text-sm xl:text-[1.2rem]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Fugit, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam enim blanditiis facere necessitatibus eos similique nemo beatae nam dicta rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vitae dolor dolorum, debitis blanditiis, numquam voluptatum eligendi inventore illo doloribus nobis omnis nostrum reiciendis, fugiat similique vel esse sint unde tenetur nam dolores repellendus excepturi veniam! Dolore natus rem ducimus quasi harum itaque error optio veniam recusandae? Nesciunt, dolorum molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, culpa quas provident vel eveniet distinctio cum maiores enim soluta voluptatum hic tempore nobis, asperiores id amet officia aliquid odit facere. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla, omnis voluptatum atque laudantium eius consequatur sed harum tempore quis!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCon;
