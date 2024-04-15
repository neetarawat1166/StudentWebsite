import React from "react";
import Formdata from "../../components/common/Formdata";
import FormImg from "../../components/common/FormImg";
import img from '../../images/Feedback.png'

const Feedback = () => {
  return (
    <>
      <section className="py-[50px] ">
        <div className="flex flex-col gap-[2rem]">
          <div className="flex justify-center">
            <h1 className="sm:text-3xl text-2xl md:text-4xl lg:text-5xl font-bold md:mb-5 text-center">
              Your Feedback Matters ...
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex justify-end">
              <div className="lg:w-[80%] w-full">
                <Formdata query="Feedback" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <FormImg img={img} />
              {/* <FormImg img={img} /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
