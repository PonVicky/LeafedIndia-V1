import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full overflow-hidden
      bg-gradient-to-br from-white via-[#f3ffdc] to-[#ecf5dc]"
    >
      <img
        src="/images/background.png"
        alt="Background"
        className="absolute inset-0 w-full  object-cover opacity-70"
      />

      <div
        className="absolute inset-0 bg-gradient-to-r
        from-white/90 via-white/50 to-transparent"
      />

      <div className="relative z-10 px-44 pt-28 flex gap-20 items-center">
        <div>
          <p className="text-[30px] font-bold text-gray-800 ">
            Choosing Eco Friendly Cup
          </p>
          <p className="text-[72px] text-[#95C93D] w-[394px] leading-[80px] font-bold">
            Eco- Conscious
          </p>
          <p className="text-[20px] text-[#3f3f3f] mt-4">
            {" "}
            We're here to support you in saving the world.
          </p>
        </div>
        <div className="border border-[#95c93d] rounded-2xl overflow-hidden group">
          <img
            src="/images/heroImage1.png"
            alt="Hero image"
            className="rounded-2xl transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
