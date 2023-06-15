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
    <div className="footer h-min relative bg-black/40 z-0">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full p-4 flex justify-between">
          <div className="flex items-center">
            <SiDatabricks className="text-5xl mr-4 text-blue-400 cursor-pointer" />
            <h2>Secured.</h2>
          </div>
          <BsFillArrowUpCircleFill className="text-5xl mr-24 text-blue-400 cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 w-full h-max p-4 md:grid-cols-footer">
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
          <form className="w-full mb-2 relative ">
            <h3 className="mt-4 mb-8 uppercase font-bold">Join Our Team</h3>
            <div className="relative">
              <input
                className="w-full p-4 outline-none text-base border-2 border-zinc-400 rounded focus:border-blue-400 focus:text-blue-400 focus:shadow-lg focus:shadow-slate-950"
                type="email"
                placeholder="Enter your email"
              />
              <FiMail className="absolute text-lg right-4 top-5 focus:border-blue-400 focus:text-blue-400" />
            </div>
            <div className="flex justify-center p-4">
              <FiInstagram className="sicon m-2 text-5xl p-2 bg-indigo-900 rounded text-slate-400" />
              <FiFacebook className="sicon m-2 text-5xl p-2 bg-indigo-900 rounded text-slate-400" />
              <FiLinkedin className="sicon m-2 text-5xl p-2 bg-indigo-900 rounded text-slate-400" />
              <FiDribbble className="sicon m-2 text-5xl p-2 bg-indigo-900 rounded text-slate-400" />
              <FiGithub className="sicon m-2 text-5xl p-2 bg-indigo-900 rounded text-slate-400" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

//  Text size/padding for social incon group is behaving unexectedly  -- currently hacked

// TODO:  Change mail icon color when input is 'focused'
