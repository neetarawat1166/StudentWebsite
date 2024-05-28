import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import "../style/NeetaStyle/style2.css";
import img1 from "../../images/testimonialbg.png";

// Testimonial data array
const testimonialData = [
  {
    name: "Satyam Raj",
    college: "NIT Mizoram",
    description:
      "It was such a great session. The way of presenting every thought and views of the teacher was great. Thanks for such an amazing session.",
    image: "testi1.jpeg",
  },
  {
    name: "Damini Srivastava",
    college: "Banasthali Vidyapith",
    description:
      "The training was outstanding beyond remarks. We never expected to learn this much in just within 3 days. It was really an amazing session. Much motivated now to move on our python journey. Thank You Upflairs for developing within us the enthusiasm to learn more and more.",
    image: "testi2.jpeg",
  },
  {
    name: "Lalit Agarwal",
    college: "Poornima college of Engineering",
    description:
      "Overall it was a great experience, as having knowledge on recent technologies used in industry will make us industry ready for the future. I am very grateful to Upflairs for guiding me so well with technologies. Thank you.",
    image: "testi3.jpeg",
  },
  {
    name: "Harshita Samant",
    college: "Banasthali Vidyapith",
    description:
      "Thanks so much Upflairs for your valuable training. I really enjoyed it and appreciate that you made it fun. It strengthened my technical skills and proved to be a great learning experience. Your helpful attitude makes it clear that you can continue to take on challenges and grow my knowledge in that field.",
    image: "testi4.jpeg",
  },
  {
    name: "Vaani Gupta",
    college: "Banasthali Vidyapith",
    description:
      "Well for the session I attended, it was just amazing. I learned a lot and I'm hopefully expecting more to explore in the same domain. I would like to thank the entire team of Upflairs for being just simply outstanding and supportive. Looking forward to more opportunities. A big THANK YOU to all. It was really one of the finest workshops I ever attended.",
    image: "testi5.jpeg",
  },
  {
    name: "Vrinda Saraswat",
    college: "Banasthali Vidyapith",
    description:
      "I really enjoyed this workshop. On the very first day of the workshop I had no idea this session was going to be mind blowing. I have learnt so many new things and  in this workshop I built my very first robot. I have a lot to say, but I have to condense it here. THIS WAS THE BEST WORKSHOP I'VE EVER BEEN TO.",
    image: "testi6.jpeg",
  },
];

export default function Testimonial() {
  return (
    <div className="section NeetaSwiper pt-[40px]">
      <div className="cotainer mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-2 text-center text-[#003366]">
          Testimonial
        </h1>
        <hr className="border-t-4 border-[#ff9416] w-32 mx-auto mb-10" />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y, Autoplay]}
          className="mySwiper mb-8 md:mb-[50px]"
          breakpoints={{
            768: { slidesPerView: 3 },
          }}
          autoplay={true}
          loop={true}
        >
          {/* Map through testimonialData and render TestimonialCard for each testimonial */}
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard
                name={testimonial.name}
                college={testimonial.college}
                description={testimonial.description}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:w-[60%] flex justify-center items-center mx-auto">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
