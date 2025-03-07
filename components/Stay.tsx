import React from "react";
import { pacifico, lobster } from "@/app/layout"; // Adjust path if needed

const Stay = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-[60vh] text-center">
      <h1 className={`${pacifico.className} text-3xl sm:text-4xl text-[#F7D100]`}>
        Stay Tuned
      </h1>
      <h2 className={`${lobster.className} text-3xl sm:text-4xl text-[#D12424]`}>
        Launching Soon
      </h2>
    </div>
  );
};

export default Stay;
