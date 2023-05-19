import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* product tiles */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Reto 6 G
            </div>
            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* Product Price */}
            <div className="text-lg font-semibold">MRP : 19 695.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">{`(Also includes all applicable duties)`}</div>
            {/* Product size range start */}
            <div className="mb-10">
              {/* Heading Start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5]">
                  Select Guide
                </div>
              </div>
              {/* Heading end */}
              {/* Size Start */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed hover:border-black opacity-50">
                  UK 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed hover:border-black opacity-50">
                  UK 10.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed hover:border-black opacity-50">
                  UK 11
                </div>
              </div>
              {/* Size End */}
              {/* Show Error Start */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* Show Error end */}
            </div>
            {/* Product size range end */}
            {/* Add to cart button start */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg
             font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            >
              Add to Cart
            </button>
            {/* Add to cart button end */}
            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
              </div>
              <div className="markdown text-md mb-5">
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
