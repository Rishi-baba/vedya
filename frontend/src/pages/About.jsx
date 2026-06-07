import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletterbox from '../components/Newsletterbox';

const About = () => {
  return (
    <div className="animate-fadeIn pb-10">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px] shadow-lg rounded-sm hover:scale-[1.02] transition-transform duration-500" src={assets.about_img} alt="About Us" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="leading-relaxed">
            Vedya was born out of a passion for innovation and a desire to revolutionize the way people experience fashion. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of premium products from the comfort of their homes.
          </p>
          <p className="leading-relaxed">
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality garments that cater to every taste and preference. From sustainable fabrics to modern cuts, our collection offers an extensive, growing aesthetic to meet your style.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black mt-2">
            <b className="text-gray-800 text-lg block mb-2">Our Mission</b>
            <p>Our mission at Vedya is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white rounded-lg group">
          <b className="text-gray-800 group-hover:text-black">Quality Assurance:</b>
          <p className="text-gray-600">We meticulously select and vet each product to ensure it meets our stringent quality standards. Every stitch is perfect.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white rounded-lg group">
          <b className="text-gray-800 group-hover:text-black">Convenience:</b>
          <p className="text-gray-600">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white rounded-lg group">
          <b className="text-gray-800 group-hover:text-black">Exceptional Customer Service:</b>
          <p className="text-gray-600">Our team of dedicated professionals is here to assist you the entire way, ensuring your satisfaction is paramount.</p>
        </div>
      </div>

      <Newsletterbox />
    </div>
  );
};

export default About;