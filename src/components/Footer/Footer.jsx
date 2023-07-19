import React from "react";
import { Link } from "react-router-dom";

// Styling
import "../../styles/typography.css";

// Assets
import Brand from "../../assets/icons/navigation/brand.svg";
import Server from "../../assets/icons/navigation/ph-flag.svg";
import GooglePay from "../../assets/icons/payment-methods/GooglePay.svg";
import Mastercard from "../../assets/icons/payment-methods/MastercardDebit.svg";
import Paypal from "../../assets/icons/payment-methods/PayPal.svg";
import Visa from "../../assets/icons/payment-methods/Visa.svg";
import Facebook from "../../assets/icons/social-media/fb.svg";
import Twitter from "../../assets/icons/social-media/twitter.svg";
import Tiktok from "../../assets/icons/social-media/tiktok.svg";
import Confetti from "../../assets/backgrounds/confetti.png";

const Footer = () => {
  return (
    // Outer div to touch both viewport width edges
    <div className="bg-[#0A192F] relative overflow-hidden">
      {/* Background image */}
      <img
        //   This CSS properties horizontally and vertically centers an absolute element
        className="absolute left-0 right-0 m-auto bottom-[-20px]"
        src={Confetti}
        alt="Confetti background"
      />
      <div className="flex flex-col justify-end px-4 max-w-[1920px] max-h-[500px] min-h-[400px] mx-auto">
        {/* Middle content */}
        <div className="flex justify-between gap-xl mb-10">
          {/* Branding area */}
          <div className="">
            <div className="flex flex-col gap-md">
              <div className="branding flex gap-2 pr-6">
                <img src={Brand} alt="Zapshop logo" />
                <div className="server flex gap-1 items-center">
                  <img src={Server} alt="The server you are currently in" />
                  <p className="tertiary text-secondary">PH</p>
                </div>
              </div>
              <p className="body text-white">Accepted payment methods</p>

              {/* Payment method cards */}
              <div className="flex flex-wrap gap-md z-10">
                <img src={GooglePay} alt="Pay with GooglePay" />
                <img src={Mastercard} alt="Pay with Mastercard Debit" />
                <img src={Paypal} alt="Pay with Paypal" />
                <img src={Visa} alt="Pay with Visa" />
              </div>
            </div>
          </div>

          {/* Footer navigations */}
          <div className="flex grow justify-evenly">
            <div className="flex flex-col gap-lg">
              <h5 className="body font-bold text-white">Zapshop PH</h5>

              <div className="flex flex-col gap-md opacity-80 body text-white">
                <Link to="/">About us</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Cookies</Link>
              </div>
            </div>

            <div className="flex flex-col gap-lg">
              <h5 className="body font-bold text-white">Customer care</h5>

              <div className="flex flex-col gap-md opacity-80 body text-white">
                <Link to="/">Help center</Link>
                <Link to="/">Return policies</Link>
                <Link to="/">Shipping & Delivery</Link>
              </div>
            </div>

            <div className="flex flex-col gap-lg">
              <h5 className="body font-bold text-white">Shop now</h5>

              <div className="flex flex-col gap-md opacity-80 body text-white">
                <Link to="/">Clothes</Link>
                <Link to="/">Furnitures</Link>
                <Link to="/">Electronics</Link>
                <Link to="/">Shoes</Link>
              </div>
            </div>

            <div className="flex flex-col gap-lg">
              <h5 className="body font-bold text-white">Contact us</h5>

              <div className="flex flex-col gap-md opacity-80 body text-white">
                <p>
                  Drop us a message <br /> (212) 456 - 7890{" "}
                </p>
                <Link to="/">zapshop@gmail.com</Link>
                <p>
                  8502 Preston Rd. Inglewood, <br /> Maine 98380
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom content */}
        <div className="flex justify-between items-center py-8 border-t border-t-neutral-50/20">
          <p className="body font-bold text-white">
            2023 ZAPSHOP. All right reserved
          </p>

          {/* Social media container */}
          <div className="flex gap-lg">
            <img src={Facebook} alt="Like and follow us on Facebook" />
            <img src={Twitter} alt="Follow us on Twitter" />
            <img src={Tiktok} alt="Follow us on TikTok" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
