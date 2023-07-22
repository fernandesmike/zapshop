import React from "react";

// Assets
import AssetIcon from "../../assets/icons/list.svg";
import FilledStar from "../../assets/icons/star-filled.svg";
import EmptyStar from "../../assets/icons/star-outlined.svg";

const ClothesFilter = () => {
  return (
    <aside className="flex flex-col gap-lg bg-card-bg max-w-[290px] min-w-[290px] px-4 py-6 rounded">
      {/* Filter title */}
      <header className="flex justify-between items-center pb-4">
        <div className="flex gap-sm">
          <img src={AssetIcon} />
          <p className="body font-bold text-primary">Filters</p>
        </div>
        <a
          className="body underline text-brand-accent font-bold underline-offset-2"
          href=""
        >
          Reset filters
        </a>
      </header>

      {/* Category container */}
      <div className="flex flex-col items-start gap-sm">
        <h4 className="body text-secondary">Category</h4>

        {/* Filter options */}
        <form className="flex flex-col gap-sm items-start" action="">
          <div className="flex gap-sm justify-between items-center">
            <label className="py-2 hover:cursor-pointer" htmlFor="men">
              Men's clothes
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="men-clothes"
              id="men"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label className=" py-2 hover:cursor-pointer" htmlFor="women">
              Women's clothes
            </label>
            <input
              className="h-[16px] w-[16px] order-first"
              type="checkbox"
              name="men"
              id="women"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label className=" py-2 hover:cursor-pointer" htmlFor="children">
              For children
            </label>
            <input
              className="h-[16px] w-[16px] order-first"
              type="checkbox"
              name="men"
              id="children"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label className=" py-2 hover:cursor-pointer" htmlFor="toddlers">
              Toddlers
            </label>
            <input
              className="h-[16px] w-[16px] order-first"
              type="checkbox"
              name="men"
              id="toddlers"
            />
          </div>
        </form>
      </div>

      {/* Ratings */}
      <div className="flex flex-col justify-start gap-sm">
        <h4 className="body text-secondary">Ratings</h4>

        {/* Filter options */}
        <form className="flex flex-col gap-sm items-start" action="">
          <div className="flex gap-sm justify-between items-center">
            <label
              className="flex gap-sm py-2 hover:cursor-pointer"
              htmlFor="5-star"
            >
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="5-star"
              id="5-star"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label
              className="flex gap-sm py-2 hover:cursor-pointer"
              htmlFor="4-star"
            >
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={EmptyStar} />
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="4-star"
              id="4-star"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label
              className="flex gap-sm py-2 hover:cursor-pointer"
              htmlFor="3-star"
            >
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="3-star"
              id="3-star"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label
              className="flex gap-sm py-2 hover:cursor-pointer"
              htmlFor="2-star"
            >
              <img src={FilledStar} />
              <img src={FilledStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="2-star"
              id="2-star"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label
              className="flex gap-sm py-2 hover:cursor-pointer"
              htmlFor="1-star"
            >
              <img src={FilledStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
              <img src={EmptyStar} />
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="1-star"
              id="1-star"
            />
          </div>
        </form>
      </div>

      {/* Price range */}
      <div className="flex flex-col justify-start gap-sm">
        <h4 className="body text-secondary">Price range</h4>

        <div>
          <p className="price text-brand-accent"> ₱ 1900 - ₱ 2900</p>
          <input
            className="w-full accent-brand-accent"
            type="range"
            name="price-range"
            id="price-range"
          />
        </div>
      </div>

      {/* Shipped from */}
      <div className="flex flex-col justify-start gap-sm">
        <h4 className="body text-secondary">Shipped from</h4>

        <form className="flex flex-col gap-sm items-start" action="">
          <div className="flex gap-sm justify-between items-center">
            <label className="py-2 hover:cursor-pointer" htmlFor="overseas">
              Overseas
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="overseas"
              id="overseas"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label className="py-2 hover:cursor-pointer" htmlFor="Luzon">
              Luzon
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="Luzon"
              id="Luzon"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label className="py-2 hover:cursor-pointer" htmlFor="visayas">
              Visayas
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="visayas"
              id="visayas"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label className="py-2 hover:cursor-pointer" htmlFor="mindanao">
              Mindanao
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="mindanao"
              id="mindanao"
            />
          </div>
        </form>
      </div>

      {/* Payment */}
      <div className="flex flex-col justify-start gap-sm">
        <h4 className="body text-secondary">Payment</h4>

        <form className="flex flex-col gap-sm items-start" action="">
          <div className="flex gap-sm justify-between items-center">
            <label className="py-2 hover:cursor-pointer" htmlFor="cod">
              Cash on delivery
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="cod"
              id="cod"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label className="py-2 hover:cursor-pointer" htmlFor="paypal">
              Paypal
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="paypal"
              id="paypal"
            />
          </div>

          <div className="flex gap-sm justify-between items-center">
            <label className="py-2 hover:cursor-pointer" htmlFor="cards">
              Credit cards
            </label>
            <input
              className="h-[16px] w-[16px] order-first peer"
              type="checkbox"
              name="cards"
              id="cards"
            />
          </div>
        </form>
      </div>
    </aside>
  );
};

export default ClothesFilter;
