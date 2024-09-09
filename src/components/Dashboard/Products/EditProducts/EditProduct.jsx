import { IconButton } from "@mui/material";
import React from "react";
import EditProductForm from "./EditProductForm";
import { useNavigate } from "react-router";

const EditProduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-5">
        <div className="container  bg-white p-5 rounded-2xl drop-shadow-xl">
          <div className="flex flex-col items-center relative">
            <h1 className="text-xl font-Pacifico text-[#f2707f]">Edit</h1>
            <h1 className="text-2xl font-Lemon font-bold text-center">
              Product
            </h1>
          </div>

          <div className="absolute top-5">
            <IconButton onClick={() => navigate(-1)}>
              <i className="fi fi-rr-arrow-small-left pt-1 px-2 hover:text-[#f2707f]"></i>
            </IconButton>
          </div>

          <EditProductForm />
        </div>
      </div>
    </>
  );
};

export default EditProduct;
