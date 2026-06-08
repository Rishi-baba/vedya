import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletterbox from '../components/Newsletterbox';

const Contact = () => {
  return (
    <div className="animate-fadeIn pb-10">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px] shadow-2xl rounded-sm object-cover hover:scale-[1.01] transition-transform duration-500" src={assets.contact_img} alt="Contact Us" />
        <div className="flex flex-col justify-center items-start gap-6 bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-lg">
          <p className="font-semibold text-xl text-gray-800">Our Store</p>
          <p className="text-gray-500 leading-relaxed">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-800 mt-4">Careers at Forever</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-0 hover:translate-y-1 hover:translate-x-1">Explore Jobs</button>
        </div>
      </div>

      <Newsletterbox />
    </div>
  );
};

export default Contact;