import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-bl from-black via-black/95 to-violet-950">
        
      <div className=" text-white  ">
        <div className="max-w-6xl m-auto text-white text-md flex flex-wrap justify-center">
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Home
            </div>
            <a className="my-3 block" href="/#">
              Services <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Products <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              About Us <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Pricing <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Partners <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">User</div>
            <a className="my-3 block" href="/#">
              Sign in <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              New Account <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Demo <span className="text-teal-600 text-xs p-1">New</span>
            </a>
            <a className="my-3 block" href="/#">
              Career <span className="text-teal-600 text-xs p-1">We're hiring</span>
            </a>
            <a className="my-3 block" href="/#">
              Surveys <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Resources
            </div>
            <a className="my-3 block" href="/#">
              Documentation <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Tutorials <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Support <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Product
            </div>
            <a className="my-3 block" href="/#">
              Our Products <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Great Deals <span className="text-teal-600 text-xs p-1">New</span>
            </a>
            <a className="my-3 block" href="/#">
              Analytics <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Mobile <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          <div className="p-5 w-48 ">
            <div className="text-xs uppercase text-gray-500 font-medium">
              Support
            </div>
            <a className="my-3 block" href="/#">
              Help Center <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/#">
              Conditions <span className="text-teal-600 text-xs p-1"></span>
            </a>
          </div>
          
        </div>
      </div>

      <div className=" text-white pt-2 ">
        <div
          className="flex pb-10 px-3 m-auto pt-5 border-t text-white text-md flex-col
      md:flex-row max-w-6xl"
        >
          <div className="mt-2">© Copyright 2023. All Rights Reserved.</div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
            <a href="/#" className="w-6 mx-1"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
