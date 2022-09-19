import React from "react";
import Button from "../../components/Button";
import Logo from "../../assets/logo.svg";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Shadow from "../../assets/shadows/1.png";

const Footer = () => {
  return (
    <div className="px-5 py-16 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center pb-7 border-b border-b-[#B1B5C3]">
          <img src={Logo} alt="logo" />
          <ul className="flex opacity-70 ml-40">
            <li className="cursor-pointer font-medium text-dark text-base mx-4">
              Home
            </li>
            <li className="cursor-pointer font-medium text-dark text-base mx-4">
              About
            </li>
            <li className="cursor-pointer font-medium text-dark text-base mx-4">
              Resources
            </li>
            <li className="cursor-pointer font-medium text-dark text-base mx-4">
              Register
            </li>
          </ul>
          <ul className="flex opacity-40">
            <li className="ml-3">
              <img src={Facebook} alt="facebook" />
            </li>
            <li className="ml-3">
              <img src={Twitter} alt="twitter" />
            </li>
            <li className="ml-3">
              <img src={Linkedin} alt="linkedin" />
            </li>
            <li className="ml-3">
              <img src={Youtube} alt="youtube" />
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center mt-9">
          <span className="text-base text-dark opacity-40">
            Copyright ©2022 © United Nations / UN-CEBD.
            <br /> All Rights Reserved.
          </span>
          <ul className="flex opacity-70">
            <li className="cursor-pointer font-medium text-dark text-base mx-4">
              Privacy Policy
            </li>
            <li className="cursor-pointer font-medium text-dark text-base mx-4">
              Terms of Use
            </li>
            <li className="cursor-pointer font-medium text-dark text-base mx-4">
              Legal Notice
            </li>
          </ul>
          <Button>Join Slack</Button>
        </div>
      </div>
      <img src={Shadow} alt="shadow" className="absolute bottom-0 left-0" />
    </div>
  );
};

export default Footer;
