import React, { useContext } from 'react';
import BannerImg from '../../images/BannerImg.png'
import BannerBackImg from '../../images/BannerBackImg.jpg'
import BannerBack4 from '../../images/BannerBack4.png'
import BannerBack3 from '../../images/BannerBack3.png'
import BannerBack5 from '../../images/BannerBack5.png'
import '../style/KirtikaStyle/KirtikaCSS.css'
import { NavLink } from 'react-router-dom';
import { isAuthenticatedContext } from '../../context/userContext';
const Banner = () => {
  const { isAuthenticat, setUser, user, setisAuthenticat } = useContext(
    isAuthenticatedContext
  );
  return (
    <section className="bg-gray-200 p-[50px] pb-0 relative" style={{ backgroundImage: `url(${BannerBackImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-2/3 lg:pr-8 mb-8 lg:mb-0"> {/* First column, 3/4 width on large screens */}
          <h1 className="text-[30px] sm:text-[45px] md:text[50px] font-bold text-[#003366] pb-4">Empower education while simplifying management and enhancing learning.</h1>
            <p className="text-[17px] sm:text-[17px] md:text-[20px] font-semibold pb-4 sm:pb-8">Discover Upflairs Student Management Hub, your companion for academic triumphs. Engage with intuitive dashboards, seamless assignment management, and a wealth of educational resources curated to enhance your learning journey. Whether you're tracking progress, accessing educational materials, or exploring our comprehensive library, our student portal is your tailored educational partner. Join us today and embark on a seamless educational experience designed to nurture your growth and achievements.</p>
           {!user && <NavLink to="/login"><button className='text-[20px] font-semibold bg-[#003366] py-3 px-4 border-2 rounded-lg text-white hover:bg-white hover:border-[#003366] hover:text-[#003366]'>Explore More!</button></NavLink> }
            {user && <NavLink to="/dashboard"><button className='text-[20px] font-semibold bg-[#003366] py-3 px-4 border-2 rounded-lg text-white hover:bg-[#ff9416] hover:border-[#003366] hover:text-[#003366]'>Explore More!</button></NavLink>}
        </div>
        <div className="lg:w-1/3"> {/* Second column, 1/4 width on large screens */}
          <img src={BannerImg} alt="Your Image" className="w-full" />
          <div className='absolute top-[6%] left-[25%] rotate-12 linear duration-1000 delay-0 hidden lg:block'>
                    <img src={BannerBack5} alt="BannerBack" width="70px" height="auto" />
          </div>
          <div className='absolute top-[5%] left-[89%] rotate-12 spinAnimate linear duration-2000 delay-0 running normal none infinite hidden lg:block'>
                    <img src={BannerBack3} alt="BannerBack2" width="100px" height="auto" />
          </div>
          <div className='absolute top-[70%] left-[55%] rotate-45 linear duration-1000 delay-0 hidden lg:block'>
                    <img src={BannerBack4} alt="BannerBack" width="100px" height="auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
