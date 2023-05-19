import React from "react";
import { SiDatabricks } from "react-icons/si";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  FiMail,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiDribbble,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer h-[60vh] relative bg-black/40 z-0">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full p-4 flex justify-between">
          <div className="flex items-center">
            <SiDatabricks className="text-5xl mr-4 text-blue-400 cursor-pointer" />
            <h2>Secured.</h2>
          </div>
          <BsFillArrowUpCircleFill className="text-5xl mr-24 text-blue-400 cursor-pointer" />
        </div>
        <div className="grid grid-cols-footer w-full p-4">
          <div className="col">
            <h3 className="mt-4 mb-8 uppercase font-bold">Navigation</h3>
            <p>Home</p>
            <p>Data</p>
            <p>Cloud</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h3 className="mt-4 mb-8 uppercase font-bold">My Account</h3>
            <p className="mt-2 mb-2">Home</p>
            <p className="mt-2 mb-2">Data</p>
            <p className="mt-2 mb-2">Cloud</p>
            <p className="mt-2 mb-2">Contact</p>
          </div>
          <div className="col">
            <h3 className="mt-4 mb-8 uppercase font-bold">Information</h3>
            <p className="mt-2 mb-2">Home</p>
            <p className="mt-2 mb-2">Data</p>
            <p className="mt-2 mb-2">Cloud</p>
            <p className="mt-2 mb-2">Contact</p>
          </div>
          <div className="col">
            <h3 className="mt-4 mb-8 uppercase font-bold">Legal</h3>
            <p className="mt-2 mb-2">Home</p>
            <p className="mt-2 mb-2">Data</p>
            <p className="mt-2 mb-2">Cloud</p>
            <p className="mt-2 mb-2">Contact</p>
          </div>
          <form>
            <h3>Join Our Team</h3>
            <input type="email" placeholder="Enter your email" />
            <FiMail className="mail-icon" />
            <div className="social-group">
              <FiInstagram className="social-icon" />
              <FiFacebook className="social-icon" />
              <FiLinkedin className="social-icon" />
              <FiDribbble className="social-icon" />
              <FiGithub className="social-icon" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
