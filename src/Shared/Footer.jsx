import React from "react";
import logo from "../assets/logo-200.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer footer-center text-black p-10 mt-7 md:mt-10">
      <aside>
        <img className="w-20" src={logo} alt="" />
        <p className="font-bold">
          71 Digital Sign
          <br />
          Providing reliable printing services since 2015
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.facebook.com/tamim.chowdhury.543/"
            target="_blank"
            className="z-10"
          >
            <FaFacebook size={25} color="#1877F2" />
          </a>
          <a
            href="https://www.instagram.com/tamimchowdhury10/ "
            target="_blank"
          >
            <IoLogoInstagram size={25} color="#d62976" />
          </a>
          <a
            href="https://www.facebook.com/tamim.chowdhury.543/"
            target="_blank"
          >
            <FaLinkedin size={25} color="#0a66c2" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
