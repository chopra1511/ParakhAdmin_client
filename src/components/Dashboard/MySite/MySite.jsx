import React from "react";
import { IconButton } from "@mui/material";

const MySite = () => {
  return (
    <div className="h-full p-5">
      <div className="h-full container p-5 bg-white rounded-2xl drop-shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-Pacifico text-[#f2707f]">My</h1>
          <h1 className="text-2xl font-Lemon font-bold text-center">Site</h1>
        </div>

        <div className=" px-20">
          <div className="p-5">
            <h1 className="text-base font-Poppins font-semibold">
              Grow your site
            </h1>
            <div className="mt-5 flex items-center gap-20">
              <div className="text-center">
                <IconButton>
                  <i className="fi fi-rr-ticket pt-1 px-2 text-2xl text-[#f2707f]"></i>
                </IconButton>
                <h1 className="text-[12px] font-Poppins font-medium">
                  Coupons and Discounts
                </h1>
              </div>
              <div className="text-center">
                <IconButton>
                  <i className="fi fi-rr-shopping-cart-check pt-1 px-2 text-2xl text-[#f2707f]"></i>
                </IconButton>
                <h1 className="text-[12px] font-Poppins font-medium">
                  Personalised carts
                </h1>
              </div>
            </div>
          </div>

          <div className="p-5">
            <h1 className="text-base font-Poppins font-semibold">
              Configure you site
            </h1>
            <div className="mt-5 flex items-center gap-20">
              <div className="text-center">
                <IconButton>
                  <i className="fi fi-rr-credit-card pt-1 px-2 text-2xl text-[#f2707f]"></i>
                </IconButton>
                <h1 className="text-[12px] font-Poppins font-medium">
                  Payment settings
                </h1>
              </div>
              <div className="text-center">
                <IconButton>
                  <i className="fi fi-rr-payroll-check pt-1 px-2 text-2xl text-[#f2707f]"></i>
                </IconButton>
                <h1 className="text-[12px] font-Poppins font-medium">
                  Additional charges
                </h1>
              </div>
              <div className="text-center">
                <IconButton>
                  <i className="fi fi-rr-document pt-1 px-2 text-2xl text-[#f2707f]"></i>
                </IconButton>
                <h1 className="text-[12px] font-Poppins font-medium">
                  Store Policy
                </h1>
              </div>
              <div className="text-center">
                <IconButton>
                  <i className="fi fi-rr-shipping-fast pt-1 px-2 text-2xl text-[#f2707f]"></i>
                </IconButton>
                <h1 className="text-[12px] font-Poppins font-medium">
                  Delivery settings
                </h1>
              </div>
            </div>
          </div>

          <div className="p-5">
            <h1 className="text-base font-Poppins font-semibold">Get Help</h1>
            <ul className="mt-5 flex flex-col gap-2">
              <li className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <i className="fi fi-rr-book pt-1 text-xl text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium">FAQs</h1>
                </div>
                <i className="fi fi-rr-angle-small-right pt-1"></i>
              </li>

              <li className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <i className="fi fi-rr-user-headset pt-1 text-xl text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium">
                    Help & Support
                  </h1>
                </div>
                <i className="fi fi-rr-angle-small-right pt-1"></i>
              </li>

              <li className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <i className="fi fi-rr-catalog-magazine pt-1 text-xl text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium">
                    How to guides
                  </h1>
                </div>
                <i className="fi fi-rr-angle-small-right pt-1"></i>
              </li>

              <li className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <i className="fi fi-rr-shield-trust pt-1 text-xl text-[#f2707f]"></i>
                  <h1 className="text-sm font-Poppins font-medium">
                    Leagal, Terms & Conditions
                  </h1>
                </div>
                <i className="fi fi-rr-angle-small-right pt-1"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySite;
