import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-5">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg font-bold italic">My youTube Clone</p>
          <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <Link to={"/"}><li><p className="hover:text-gray-400 italic">Home</p></li></Link>
            <Link to={"/about"}><li><p className="hover:text-gray-400 italic">About</p></li></Link>
            <Link to={"/contact"}><li><p className="hover:text-gray-400 italic">Contact</p></li></Link>
            <a className='text-[2rem] hover:text-gray-500' target='blank' href="https://github.com/Salendra143"><FaGithub /></a>
            <a className='text-[2rem] hover:text-gray-500 '  target='blank' href="https://www.linkedin.com/in/salendra-singh143/"><FaLinkedin /></a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
