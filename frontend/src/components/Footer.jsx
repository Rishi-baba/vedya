import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Infinity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-20 pt-16 pb-8 border-t bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-5">
            <Infinity className="w-8 h-8 text-gray-800" />
            <span className="text-2xl font-bold tracking-widest text-gray-900">FOREVER</span>
          </Link>
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            Welcome to Forever. We craft high-quality fashion that empowers your individual style. Experience the perfect blend of modern aesthetics, comfort, and premium craftsmanship.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-gray-900">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
            <li><Link to="#" className="hover:text-black transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-gray-900">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1 (800) 123-4567</li>
            <li>support@forever.com</li>
            <li className="flex gap-4 mt-4">
               {/* Social Icons Placeholders */}
               <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">In</span>
               <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">Fb</span>
               <span className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-pointer">Tw</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="border-gray-200" />
        <p className="py-5 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Forever - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;