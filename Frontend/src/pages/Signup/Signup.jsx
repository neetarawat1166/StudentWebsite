import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import img1 from '../../images/wavii2.jpg';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import toast, {Toaster} from 'react-hot-toast'

const Signup = () => {

    const navigate = useNavigate(); // Initialize useNavigate
    
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({
        profile: "",
        name: "",
        email: "",
        password: "",
        course: ""
    });

    const ValueUpdate = (e) => {
        const { name, value } = e.target;
        if (name === 'profile') {
            setUserData({
                ...userData,
                [name]: value
            });
        } else {
            setUserData({
                ...userData,
                [name]: value
            });
        }
    };
    console.log(userData)
    const datasave = async (e) => {
        e.preventDefault();
        const { profile, name, email, password, course } = userData;

        if (!profile || !name || !email || !password || !course) {
            return toast.error("Please fill all the fields");
        }

        try {
            const res = await fetch("http://localhost:5000/api/v1/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ profile, name, email, password, course })
            });
            const serverres = await res.json();
            console.log(serverres);
            
            setUserData({
                profile: "",
                name: "",
                email: "",
                password: "",
                course: ""
            });

            if (!serverres.success && serverres.message === "This email already exists") {
                // If the email already exists, show an alert message
                return toast.error("This mail already exists")
            }
            else{
               // Show success message
                toast.success("Signup Successfully");
                // Redirect to login page after a slight delay
                setTimeout(() => {
                    navigate('/login');
                }, 500); // 500 milliseconds delay
            }


        } catch (error) {
            console.error("Error:", error);
        }
    };

    const [activeButton, setActiveButton] = useState('signup');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        <>
            <div className='section bg-[#eeeeee] py-[50px]'>
                <div className='container mx-auto lg:w-[40%] md:w-[60%] w-[80%] py-[30px] rounded-md bg-white' style={{ backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h1 className='md:text-[30px] text-[20px] font-bold text-center mb-8 text-[#4c4a4a]'>Signup Form</h1>
                    <div className='grid grid-cols-2 gap-4 mx-auto lg:w-[70%] mb-8 md:w-[70%] w-[90%] sm:w-[80%] rounded-lg border-2 border-solid border-[#b4b1b1]'>
                        <NavLink to={'/signup'} className={`flex items-center p-1 md:p-2 justify-center md:text-lg text-[16px] font-semibold rounded-lg ${activeButton === 'signup' ? 'bg-[#65bc7b] text-white' : ''}`} onClick={() => handleButtonClick('signup')}>
                            <button>Signup</button>
                        </NavLink>
                        <NavLink to={'/login'} className={`flex p-1 md:p-2 items-center justify-center md:text-lg text-[16px] font-semibold rounded-lg ${activeButton === 'login' ? 'bg-[#65bc7b] text-white' : ''}`} onClick={() => handleButtonClick('login')}>
                            <button className='text-[#4c4a4a]'>Login</button>
                        </NavLink>
                    </div>

                    <form className='mx-auto grid grid-cols-1 gap-y-4 lg:w-[70%] md:w-[70%] w-[90%] sm:w-[80%] mt-4' onSubmit={datasave}>
                    <select id="profile" onChange={ValueUpdate} value={userData.profile} name="profile" className='border-2 border-solid hover:border-[#65bc7b] border-[#b4b1b1] rounded-lg md:px-6 py-2 px-4'>
                        <option value="" disabled>Choose your profile</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                        <input type="text" value={userData.name} onChange={ValueUpdate} name="name" placeholder='Enter your name...' className='border-2 border-solid border-[#b4b1b1] hover:border-[#65bc7b] rounded-lg md:px-6 py-2 px-4' />
                        <input type="email" value={userData.email} onChange={ValueUpdate} name="email" placeholder='Enter your email...' className='border-2 border-solid border-[#b4b1b1] hover:border-[#65bc7b] rounded-lg md:px-6 py-2 px-4' />
                        <div className="mt-1 relative">
                        <input value={userData.password} onChange={ValueUpdate} name="password" type={show ? "text" : "password"} placeholder='Enter your Password...' autoComplete="current-password" required className=" w-full border-2 border-solid border-[#b4b1b1] hover:border-[#65bc7b] rounded-lg md:px-6 py-2 px-4"/>
                        <div className=" absolute top-[50%] right-3 cursor-pointer translate-y-[-50%]" onClick={() => setShow((prev) => !prev)}>
                            {show ? <IoEye /> : <IoEyeOff  />}
                        </div>
                      </div>
                        <input type="text" value={userData.course} onChange={ValueUpdate} name="course" placeholder='Enter your Course...' className='border-2 border-solid border-[#b4b1b1] hover:border-[#65bc7b] rounded-lg md:px-6 py-2 px-4' />
                    </form>
                    <div className='mx-auto justify-center items-center flex mt-6 '>
                        <button className='py-2 px-4 md:py-2 md:px-8 text-lg ont-semibold rounded-lg bg-[#65bc7b] text-white' type='submit' onClick={datasave}>Signup</button>
                    </div>
                    <Toaster 
                    position="top-center"
                    reverseOrder={false}
                    />
                </div>
            </div>
        </>
    );
}

export default Signup;