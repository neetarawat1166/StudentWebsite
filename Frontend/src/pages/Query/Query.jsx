import React, { useState } from "react";
import Formdata from "../../components/common/Formdata";
import FormImg from "../../components/common/FormImg";
import img from '../../images/query.png'
import axios from "axios";

const Query = () => {

  return (
    <>
      <section className="py-[50px] ">
        <div className="flex flex-col gap-[2rem]">
          <div className="flex justify-center">
            <h1 className="text-3xl text-[#003366] md:text-4xl lg:text-5xl font-bold md:mb-5 text-center">Any Queries ?</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex justify-end">
              <div className="lg:w-[80%] w-full">
                <Formdata query="Queries"/>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <FormImg img={img}/>{/* <FormImg img={img} /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Query;
