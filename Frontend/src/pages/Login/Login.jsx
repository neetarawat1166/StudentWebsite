import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import img1 from '../../images/wavii2.jpg'

const Signup = () => {

    const [activeButton, setActiveButton] = useState('login');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };
    
  return (
    <>
<div className='section bg-[#eeeeee] py-[50px]'>
    <div className='container mx-auto lg:w-[40%] md:w-[60%] w-[80%] py-[30px] rounded-md bg-white' style={{backgroundImage:`url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className='text-[#4c4a4a] md:text-[30px] text-[20px] font-bold text-center mb-8'>Login Form</h1>
        <div className='grid grid-cols-2 gap-4 mx-auto lg:w-[70%] mb-8 md:w-[70%] w-[90%] sm:w-[80%] rounded-lg border-2 border-solid border-[#b4b1b1]'>
            <NavLink to={'/signup'} className={`flex items-center p-1 md:p-2 justify-center md:text-lg text-[16px] font-semibold rounded-lg ${activeButton === 'signup' ? 'bg-[#65bc7b] text-white' : ''}`}
                onClick={() => handleButtonClick('signup')}><button className='text-[#4c4a4a]'>Signup</button></NavLink>
            <NavLink to={'/login'} className={`flex p-1 md:p-2 items-center justify-center md:text-lg text-[16px] font-semibold rounded-lg ${activeButton === 'login' ? 'bg-[#65bc7b] text-white' : ''}`}
                onClick={() => handleButtonClick('login')}><button >Login</button></NavLink>
        </div>

        <form action="" className='mx-auto grid grid-cols-1 gap-y-4 lg:w-[70%] md:w-[70%] w-[90%] sm:w-[80%] mt-4'>
            <input type="email" placeholder='Enter your email...' className='border-2 border-solid border-[#b4b1b1] rounded-lg md:px-6 py-2 px-4'/>
            <input type="password" placeholder='Enter your password...' className='border-2 border-solid border-[#b4b1b1] rounded-lg md:px-6 py-2 px-4'/>
            <p className='text-[#2c55daee]'>Forgot password ?</p>
        </form>
        <div className='mx-auto justify-center items-center flex mt-6 '>
            <button className='py-2 px-4 md:py-2 md:px-8  text-lg ont-semibold rounded-lg bg-[#65bc7b] text-white'>Login</button>
        </div>
        <p className='text-[#4c4a4a] mx-auto justify-center items-center flex mt-6 '>Not a member?<NavLink to={'/signup'}><span className='text-[#2c55daee] px-2'>Signup now</span></NavLink></p>
        

    </div>
</div>

    </>
  )
}

export default Signup