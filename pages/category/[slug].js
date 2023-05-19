import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

const Category = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
