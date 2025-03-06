import React from 'react';

function Events() {
  return (
    <div className="h-[140vh] md:h-[140vh] relative flex flex-col md:flex-row justify-center md:justify-end items-center bg-cover bg-center bg-no-repeat event-bg w-full p-5 gap-5">
      {/* Heading */}
      <div className="text-center md:w-1/3 z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#E90909] font-leckerli">
          Dialogue&apos; <br className="hidden md:block" />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl">Session</span>
        </h1>
      </div>

      {/* Event Cards */}
      <div className="flex w-full md:w-auto justify-between md:flex-row gap-5">
        <div className="bg-cover bg-center bg-no-repeat event-red w-[45%] md:w-[16vw] h-[30vh] md:h-[42vh] flex flex-col justify-center items-center">
          <h1 className="text-xl font-bold text-[#FFFCF5] text-center">Agents of Change:</h1>
          <p className="px-6 py-5  text-sm font-medium text-[#FFFCF5] text-center">
            Role of Writers as Social Commentators and Activists
          </p>
        </div>

        <div className="bg-cover bg-center bg-no-repeat event-blue w-[45%] md:w-[16vw] h-[30vh] md:h-[42vh] flex flex-col justify-center items-center text-[#FFFCF5]">
          <h1 className="text-xl font-bold text-center">Unveiling the Past:</h1>
          <p className="px-6 py-5 text-sm font-medium text-[#FFFCF5] text-center">
            The Craft and Challenges of Indian History Writing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Events;
