import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const productLinks = [
    { name: 'Features', link: '#' },
    { name: 'Pricing', link: '#' },
    { name: 'Templates', link: '#' },
    { name: 'Integrations', link: '#' },
  ];

  const companyLinks = [
    { name: 'About', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Careers', link: '#' },
    { name: 'Press', link: '#' },
  ];

  const resourcesLinks = [
    { name: 'Documentation', link: '#' },
    { name: 'Help Center', link: '#' },
    { name: 'Community', link: '#' },
    { name: 'Contact', link: '#' },
  ];

  return (
    <footer className="mt-[30px] max-w-[1600px] mx-auto bg-[#101727] p-[30px] font-sans">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl text-white font-bold">DigiTools</h2>
          <p className="text-[#627382] text-[16px] font-normal">
            Premium digital tools for creators, professionals, and businesses. Work smarter
            with our suite of powerful tools.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[30px] col-span-2">
          <ul className="flex flex-col gap-4">
            <h4 className="text-white text-[16px] font-medium mb-1">Product</h4>
            {productLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-[#627382] text-[16px] font-normal hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            <h4 className="text-white text-[16px] font-medium mb-1">Company</h4>
            {companyLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-[#627382] text-[16px] font-normal hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-4">
            <h4 className="text-white text-[16px] font-medium mb-1">Resources</h4>
            {resourcesLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-[#627382] text-[16px] font-normal hover:text-white transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 items-end">
          <p className="text-white text-[20px] font-medium">Social Links</p>
          <div className="flex gap-4">
            <a href="#" className="text-[#627382] text-3xl hover:text-white transition-colors duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#627382] text-3xl hover:text-white transition-colors duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#627382] text-3xl hover:text-white transition-colors duration-200">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mb-[20px] border-t border-[#1a2333] mt-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-[30px] mb-[5px] pb-[30px]">
        <p className="text-[#627382] text-[16px] font-normal">
          © 2026 Digitools. All rights reserved.
        </p>
        <ul className="flex gap-[30px]">
          <li>
            <a href="#" className="text-[#627382] text-[16px] font-normal hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-[#627382] text-[16px] font-normal hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-[#627382] text-[16px] font-normal hover:text-white transition-colors duration-200">
              Cookies
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;