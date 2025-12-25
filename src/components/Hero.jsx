import React, { useState } from "react";

const Hero = () => {
  const [index, setIndex] =  useState(0);
  const images = [
    `/images/Grid/image2.png`,
    `/images/Grid/image3.png`,
    `/images/Grid/image4.png`,
    `/images/Grid/image5.png`,
    `/images/Grid/image6.png`,
    `/images/Grid/image7.png`,
    `/images/Grid/image8.png`,
    `/images/Grid/image9.png`,
    `/images/Grid/image10.png`,
  ]
  function handleLeftClick() {
    if(index === 0) {
      setIndex(images.length-1);
      return;
    }
    setIndex(index-1)
  }

  function handleRightClick(){
    if(index === images.length-1){
      setIndex(0);
      return;
    }
    setIndex(index+1);
  }
  return (
    <div
      className="relative min-h-screen w-full 
      bg-[#fefbea] grid grid-cols-[1.2fr_1fr]"
    >
      <section className="mt-44 ml-44 max-w-[80%]">
        <p className="tracking-tighter leading-[0.95]  text-[80px] font-extrabold text-[#284B63]">Make The Best</p>
        <p className="text-[96px] leading-[0.95] text-[#3c6e71] tracking-tighter font-extrabold mb-5">Packaging</p>
        <p className="mb-6 text-[16px] leading-[24px] text-[#7A7A7A] md:w-[480px]">Sustainable, food-safe, biodegradable packaging solutions designed for the growing food industry.
      </p>
      <div>
        <button
            className=" group text-[14px] px-14  py-3.5  md:text-[16px]  text-center
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
                  flex items-center 
                  "
          >
            <img
              src="/images/learnmore.png"
              className="w-[18px] mr-2 h-auto transition-all duration-300 group-hover:invert group-hover:hue-rotate-90 group-hover:saturate-150"
              alt="img"
            />
            <p>
            Learn more
            </p>

          </button>
          <div className="mt-12 flex gap-0">
              <button onClick={handleLeftClick}>
                  <img 
                    src="/images/previous.svg"
                    alt="previous"
                    className="w-[40px] hover:pr-2 ml-2 transition-all duration-300"
                    />
              </button>
              <div className="w-[150px] h-[150px] overflow-hidden rounded-md">
                  <img
                  src={images[index]}
                  alt="image"
                  className="w-[200px] "
                  />
              </div>
              <button onClick={handleRightClick}>
                <img 
                    src="/images/next.svg"
                    alt="previous"
                    className="w-[40px] hover:pl-2 mr-2 transition-all duration-300"
                    />
              </button>
              <div className="mr-2 group h-[150px] items-center transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#dbe2d4] rounded-full px-1.5 border border-[#dce0d9] flex flex-col justify-between">
                <img src="/images/up.svg" alt="up" 
                className="w-10 pt-2 group-hover:pt-0  transition-all duration-300 "/>
                <img src="images/box.png" alt="box" 
                className="w-11 pb-4"/>
              </div>

              <div className="mr-2 group h-[150px] items-center transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#dbe2d4] rounded-full px-1.5 border border-[#dce0d9] flex flex-col justify-between">
                <img src="/images/up.svg" alt="up" 
                className="w-10 pt-2 group-hover:pt-0  transition-all duration-300 "/>
                <img src="images/coffee.png" alt="box" 
                className="w-11 pb-4"/>
              </div>

              <div className="mr-2 group h-[150px] items-center transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#dbe2d4] rounded-full px-1.5 border border-[#dce0d9] flex flex-col justify-between">
                <img src="/images/up.svg" alt="up" 
                className="w-10 pt-2 group-hover:pt-0  transition-all duration-300 "/>
                <img src="images/cutlery.png" alt="box" 
                className="w-11 pb-4"/>
              </div>

          </div>
      </div>
      </section>
      <section className="flex items-end justify-center">
        <div>
          <img src="/images/hero-visual.png" alt="hero image" 
          className="w-full max-w-[650px] "/>
        </div>
      </section>
    </div>
  )
};

export default Hero;
