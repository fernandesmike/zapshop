import React from "react";

// Assets
import ShopImage from "../../assets/sample_shop.svg";
import ProductImage from "../../assets/sample_product.png";

// Styling
import "../../styles/typography.css";

const ProductCard = () => {
  return (
    <div className="max-h-[370px] max-w-[290px]">
      {/* Product image container */}
      <div className="h-[150px] w-full bg-red-500 rounded-t relative">
        <img
          className="h-full w-full brightness-90"
          src={ProductImage}
          alt=""
        />

        {/* Product tags */}
        <div className=" bg-brand-accent w-fit py-2 px-4 absolute top-3 left-0">
          <p className="tags text-white">50% OFF</p>
        </div>
      </div>

      {/* Product description container */}
      <div className="px-4 py-2 bg-card-bg rounded-b">
        {/* Description */}
        <div className=" mb-4">
          <div className="flex flex-col gap-sm">
            <div className="max-h-[48px] min-h-[48px] flex items-center">
              <h4 className="body line-clamp-2">
                1000 ML Pitcher fo Pitcher foPitcher foPitcher for Pitcher
                foPitcher foPitcher forPitcher foPitcher foPitcher for
              </h4>
            </div>

            {/* Product price */}
            <div className="flex justify-between items-center">
              {/* Original and discounted price */}
              <div className="">
                <p className="price text-brand-accent">₱ 1,500</p>
                <p className=" line-through text-secondary tertiary font-normal">
                  ₱ 2,500
                </p>
              </div>

              {/* Total sold */}
              <div>
                <p className="tertiary font-normal">15.5k sold</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seller info */}
        <div className="flex items-center gap-sm">
          <img src={ShopImage} alt="" />
          <p className="tertiary text-primary font-normal">Boss Omar Shop</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
