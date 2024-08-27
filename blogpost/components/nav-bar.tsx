import * as React from "react";
import LogoBlue from "./blogPostComponents/logo-blue";


const NavBar = () => {
  return (
    <div className="text-sm flex flex-wrap gap-5 justify-between px-12 py-8 w-full bg-white bg-opacity-90 max-md:px-5 max-md:max-w-full">
     <LogoBlue />
       
      <div className="flex flex-col self-start mt-5 font-semibold text-neutral-600 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start max-md:max-w-full">
          <div>Home</div>
          <div>Teams</div>
          <div>Success Stories</div>
          <div>About Us</div>
          <div className="font-bold text-blue-800">Blogs</div>
          <div>Get Involved</div>
        </div>
        {/* <div className="flex shrink-0 self-end mt-2.5 mr-52 bg-blue-800 rounded-xl h-[5px] w-[59px] max-md:mr-2.5" /> */}
      </div>
      <div className="flex gap-10 font-bold whitespace-nowrap">
        <div className="my-auto text-neutral-700">Login</div>
        <div className="px-11 py-6 text-center text-white bg-blue-800 rounded-xl max-md:px-5">
          Donate
        </div>
      </div>
    </div>
  );
}

export default NavBar;