
const NavBar = () => {
  return (
    <div className="font-sans ">
      <section
        className="w-[75%] mx-auto px-25 py-3 
      sticky top-0 bg-white rounded-full  md:px-8  flex  items-center justify-between  
        border-b border-[#f2f2f2] md:border-none shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
      >
        <nav className="">
          <img
            src="/images/logo.png"
            alt="Leafed India Logo"
            className="w-[230px]"
          />
        </nav>
        <nav className="w-full flex gap-10 justify-end">
          <button
            className="text-[14px]  md:text-[17px]  py-1 px-3 text-center
                   text-[#284b63] font-medium 
                  border border-transparent
                  rounded-[6px]

                  hover: cursor-pointer"
          >
            Home
          </button>
          <button
            className="text-[14px]  md:text-[17px]  py-1 px-3 text-center
                   text-[#284b63] font-medium 
                  border border-transparent
                  rounded-[6px]
        
                  hover: cursor-pointer"
          >
            Products
          </button>
          <button
            className="text-[14px]  md:text-[17px]  py-1 px-3 text-center
                   text-[#284b63] font-medium 
                  border border-transparent
                  rounded-[6px]
        
                  hover: cursor-pointer"
          >
            Gallery
          </button>
         
          <button
            className="text-[14px] px-12  py-3  md:text-[16px]  text-center
                   text-white font-medium 
                  border border-transparent
                  hover:border-[#284b63]
                  rounded-full
                  transition-all duration-300
                  
        
                 hover:bg-[#fefbea]
                 hover:text-[#284b63]
                  
                  hover:-translate-x-[4px]
                  hover:-translate-y-[4px]
                  
                  hover:shadow-[4px_4px_0px_#284b63]
                  hover: cursor-pointer
                  bg-[#3c6e71]
                  "
          >
            Contact Us
          </button>
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
