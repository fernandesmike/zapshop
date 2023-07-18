import React from "react";

// Styling
import "../../styles/typography.css";

const ProductCard = () => {
  return (
    <div>
      {/* Product image container */}
      <div>
        <img src="" alt="" />

        {/* Product tags */}
        <div>
          <p>50% OFF</p>
        </div>
      </div>

      {/* Product description container */}
      <div>
        {/* Description */}
        <div>
          <h4>
            1000 ML Pitcher for sale1000 ML Pitcher for sale1000 ML Pitcher for
            sale
          </h4>

          {/* Product price */}
          <div>
            {/* Original and discounted price */}
            <div>
              <p>P 15,000</p>
              <p>P 2,500</p>
            </div>

            {/* Total sold */}
            <div>
              <p>15.5k sold</p>
            </div>
          </div>
        </div>

        {/* Seller info */}
        <div>
          <img src="" alt="" />
          <p>Seller name</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
