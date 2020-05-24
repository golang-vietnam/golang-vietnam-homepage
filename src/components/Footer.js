import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import tw from 'twin.macro';

const Footer = props => {
  return (
    <div className="bg-gray-200 py-7">
      <div className="container mx-auto text-sm px-gutter">
        <div className="flex items-center justify-between -mx-gutter sm:flex-row flex-col-reverse">
          <div className="font-medium opacity-40 px-gutter">
            © {new Date().getFullYear()} Golang Vietnam
          </div>
          <div className="px-gutter sm:mb-0 mb-5">
            <a
              className="opacity-80 flex items-center no-underline text-gray-900 hover:underline"
              href="mailto:gophers@golang.org.vn"
            >
              <FaEnvelope className="mr-2" /> <span>gophers@golang.org.vn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
