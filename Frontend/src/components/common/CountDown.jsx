import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const targetValue1 = 100; // Change this to your desired target value for number 1
    const targetValue2 = 200; // Change this to your desired target value for number 2
    const speed = 1; // Change this to adjust the speed of increase

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (number1 < targetValue1) {
                setNumber1(prev => prev + 1);
            } else {
                clearInterval(interval1);
            }
        }, speed);

        const interval2 = setInterval(() => {
            if (number2 < targetValue2) {
                setNumber2(prev => prev + 1);
            } else {
                clearInterval(interval2);
            }
        }, speed);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, []); 

    return (
        <>
            <section className='bg-[#65bc7b]'>
                <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-5">
                    <div className='px-10 text-center'>
                        <p className='text-white font-bold text-[40px]'>
                            {number1 <= targetValue1 ? number1 : targetValue1}+
                        </p>
                        <p className='text-white text-[25px] font-semibold'>
                            Students connect till date
                        </p>
                    </div>
                    <div className='px-10 text-center'>
                        <p className='text-white font-bold text-[40px]'>
                            {number2 <= targetValue2 ? number2 : targetValue2}+
                        </p>
                        <p className='text-white text-[25px] font-semibold'>
                            Ranked with 4.7 Rating
                        </p>
                    </div>
                    <div className='px-10 text-center'>
                        <p className='text-white font-bold text-[40px]'>
                            {number2 <= targetValue2 ? number2 : targetValue2}+
                        </p>
                        <p className='text-white text-[25px] font-semibold'>
                            Goal Reached
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountDown;
