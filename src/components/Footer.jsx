import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
// Footer
const Footer = () => {
  return (
    <div className="bg-[#000] mt-8 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row pl-10 md:pl-0 space-y-4 md:justify-between">
          <div>
            <h1 className="text-[1.50rem] font-bold">CS-Ticket System</h1>
            <p className="w-[350px] mt-5 text-gray-300">
              Tickets include status, priority, and details like title,
              description, agent, and date. Color-coded priorities (High,
              Medium, Low) make it easy to identify urgency. Includes company
              info, services, policies, and social links in the footer.
            </p>
          </div>
          <div>
            <h1 className="text-[1.25rem] font-semibold">Company</h1>
            <ul className="my-5 space-y-3">
              <li className=" text-gray-300">
                <a href="">About</a>
              </li>
              <li className=" text-gray-300">
                <a href="">Our Mission</a>
              </li>
              <li className=" text-gray-300">
                <a href="">Contact Saled</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[1.25rem] font-semibold">Services</h1>
            <ul className="my-5 space-y-3">
              <li className=" text-gray-300">
                <a href="">Products & Services</a>
              </li>
              <li className=" text-gray-300">
                <a href="">Customer Stories</a>
              </li>
              <li className=" text-gray-300">
                <a href="">Download Apps</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[1.25rem] font-semibold">Information</h1>
            <ul className="my-5 space-y-3">
              <li className="text-gray-300">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="text-gray-300">
                <a href="">Privacy Policy</a>
              </li>
              <li className="text-gray-300">
                <a href="">Join Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[1.25rem] font-semibold">Social Links</h1>
            <ul className="my-5 space-y-3">
              <li className=" flex items-center gap-3 text-gray-300">
                <FaXTwitter />
                <a href="">@CS-Ticket System</a>
              </li>
              <li className=" flex items-center gap-3 text-gray-300">
                <FaLinkedinIn />
                <a href="">@CS-Ticket System</a>
              </li>
              <li className=" flex items-center gap-3 text-gray-300">
                <FaFacebook />
                <a href="">@CS-Ticket System</a>
              </li>
              <li className=" flex items-center gap-3 text-gray-300">
                <FaDiscord />
                <a href="">support@cst.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className=" text-gray-300 max-w-7xl mx-8 md:mx-auto " />
      <h3 className="text-center text-gray-300 mt-10 ">
        © 2025 CS-Ticket System. All rights reserved.
      </h3>
    </div>
  );
};

export default Footer;
