import React from "react";

const NavBar = () => {
  return (
    <div className="font-sans">
      <section
        className="px-25 py-2 
      sticky top-0 bg-white/70 backdrop-blur-md z-50  md:px-11  flex  items-center justify-between 
        border-b border-[#f2f2f2] md:border-none"
      >
        <nav className="">
          <img
            src="/images/logo.png"
            alt="Leafed India Logo"
            className="w-[230px]"
          />
        </nav>
        <nav className="flex gap-7">
          <button
            className="text-[14px]  md:text-[16px]  py-1 px-3 text-center
                   text-black 
                  border border-transparent
                  hover:border-[#85b437]
                  rounded-[6px]
                  transition-all duration-300
        
                 hover:bg-white
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#85b437]
                  hover: cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Home
          </button>
          <button
            className="text-[14px]  md:text-[16px]  py-1 px-3 text-center
                   text-black 
                  border border-transparent
                  hover:border-[#85b437]
                  rounded-[6px]
                  transition-all duration-300
        
                 hover:bg-white
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#85b437]
                  hover: cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Products
          </button>
          <button
            className="text-[14px]  md:text-[16px]  py-1 px-3 text-center
                   text-black 
                  border border-transparent
                  hover:border-[#85b437]
                  rounded-[6px]
                  transition-all duration-300
        
                 hover:bg-white
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#85b437]
                  hover: cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Gallery
          </button>
          <button
            className="text-[14px]  md:text-[16px]  py-1 px-3 text-center
                   text-black 
                  border border-transparent
                  hover:border-[#85b437]
                  rounded-[6px]
                  transition-all duration-300
        
                 hover:bg-white
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#85b437]
                  hover: cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Certification
          </button>
          <button
            className="text-[14px]  md:text-[16px]  py-1 px-3 text-center
                   text-black 
                  border border-transparent
                  hover:border-[#85b437]
                  rounded-[6px]
                  transition-all duration-300
        
                 hover:bg-white
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#85b437]
                  hover: cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            About Us
          </button>
          <button
            className="text-[14px]  md:text-[16px]  py-1 px-3 text-center
                   text-black 
                  border border-transparent
                  hover:border-[#85b437]
                  rounded-[6px]
                  transition-all duration-300
        
                 hover:bg-white
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#85b437]
                  hover: cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Contact Us
          </button>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
