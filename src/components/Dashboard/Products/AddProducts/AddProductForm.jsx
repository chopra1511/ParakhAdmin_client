import { Button, IconButton } from "@mui/material";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  getAllProducts,
} from "../../../../store/reducers/productSlice";
import { Cloudinary } from "@cloudinary/url-gen";

const cloudinary = new Cloudinary({
  cloud_name: "dxeabaeyc",
  secure: true,
});

const AddProductForm = () => {
  const [showDescriptionField, setShowDescriptionField] = useState(false);
  const [showWeightInput, setShowWeightInput] = useState(false);
  const [showVariantInput, setShowVariantInput] = useState(false);
  const [showHighlightsInput, setShowHighlightsInput] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.products);

  const itemNameRef = useRef("");
  const priceRef = useRef("");
  const discountedPriceRef = useRef("");
  const skuIdRef = useRef("");
  const materialRef = useRef("");
  const colorRef = useRef("");
  const stockRef = useRef("");
  const categoryRef = useRef("");
  const descriptionRef = useRef("");
  const weightRef = useRef("");

  const addProductHandler = (e) => {
    e.preventDefault();
    const productData = {
      image: imageUrl,
      itemName: itemNameRef.current.value,
      price: priceRef.current.value,
      discountedPrice: discountedPriceRef.current.value,
      skuId: skuIdRef.current.value,
      material: materialRef.current.value,
      color: colorRef.current.value,
      stock: stockRef.current.value,
      category: categoryRef.current.value,
      description: descriptionRef.current.value,
      weight: weightRef.current.value,
    };
    dispatch(addProducts(productData))
      .then(() => {
        dispatch(getAllProducts());

        itemNameRef.current.value = "";
        priceRef.current.value = "";
        discountedPriceRef.current.value = "";
        skuIdRef.current.value = "";
        materialRef.current.value = "";
        colorRef.current.value = "";
        stockRef.current.value = "";
        categoryRef.current.value = "";
        descriptionRef.current.value = "";
        weightRef.current.value = "";
        setImageUrl("");

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "Parakh");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dxeabaeyc/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.secure_url); // The image URL after upload
          console.log(data.secure_url);
        } else {
          console.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleDeleteImage = () => {
    setImageUrl(""); // Clear the single image URL
  };

  return (
    <div className="mt-10 px-20 py-10">
      <form onSubmit={addProductHandler}>
        <div className="">
          <h1 className="text-base font-Poppins font-medium">
            Upload photos here
          </h1>
        </div>

        <div className="image relative mt-3">
          <div>
            <div className="mb-3 flex gap-5 overflow-auto hide-scrollbar">
              {imageUrl && (
                <div className="relative mt-2">
                  <img
                    src={imageUrl}
                    alt="Uploaded"
                    className="w-24 h-24 rounded-xl"
                  />
                  <div
                    onClick={() => handleDeleteImage()}
                    className="rounded-full cursor-pointer bg-[#f4f4f4] drop-shadow border-dashed flex justify-center items-center absolute -top-2 -right-3"
                  >
                    <i className="fi fi-br-cross-small text-[#ff0000] px-1 pt-1 rounded-full"></i>
                  </div>
                </div>
              )}
            </div>

            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="img"
              className="flex flex-col items-center justify-center py-3 border-2 border-dashed border-[#C0C5CD] bg-[#EBEBEB] rounded-xl cursor-pointer text-gray-600 hover:text-gray-800 hover:border-[#f2707f]"
            >
              <span className="text-base text-[#6D6D6D] font-Poppins font-semibold">
                + Add media
              </span>
            </label>
          </div>

          <div className="mt-10">
            <div className="itemName relative">
              <input
                type="text"
                maxLength={50}
                minLength={3}
                placeholder="Item Name*"
                className="w-full border-2 outline-[#f2707f] rounded-xl py-3 px-5 text-sm font-Poppins font-medium"
                required
                ref={itemNameRef}
              />
              <p className="text-sm font-Poppins font-medium bg-white px-2 absolute -top-[0.5rem] left-3">
                Item Name*
              </p>
            </div>

            <div>
              <div className="mt-10 flex justify-between gap-5">
                <div className="price relative w-1/2">
                  <input
                    type="number"
                    maxLength={50}
                    minLength={3}
                    placeholder="0"
                    className="w-full border-2 outline-[#f2707f] rounded-xl py-3 px-8 text-sm font-Poppins font-medium"
                    required
                    ref={priceRef}
                  />
                  <p className="text-sm font-Poppins font-medium bg-white px-2 absolute -top-[0.5rem] left-3">
                    Price
                  </p>
                  <span className="text-sm font-Poppins font-semibold bg-white px-2 absolute top-[0.8rem] left-2">
                    ₹
                  </span>
                </div>

                <div className="discount relative w-1/2">
                  <input
                    type="number"
                    maxLength={50}
                    minLength={3}
                    placeholder="0"
                    className="w-full border-2 outline-[#f2707f] rounded-xl py-3 px-10 text-sm font-Poppins font-medium"
                    ref={discountedPriceRef}
                  />
                  <p className="text-sm font-Poppins font-medium bg-white px-2 absolute -top-[0.5rem] left-3">
                    Discounted Price
                  </p>
                  <span className="text-sm font-Poppins font-semibold bg-white px-2 absolute top-[0.8rem] left-2">
                    ₹
                  </span>
                </div>
              </div>
              <h1 className="text-[12px] font-Poppins mt-2 text-[#6D6D6D]">
                If not added, customers may request price
              </h1>

              <div className="sku relative mt-5 pb-3 border-b-2">
                <input
                  type="text"
                  maxLength={50}
                  minLength={3}
                  placeholder="SKU ID"
                  className="w-full border-2 outline-[#f2707f] rounded-xl py-3 px-5 text-sm font-Poppins font-medium z-10"
                  required
                  ref={skuIdRef}
                />
                <p className="text-sm font-Poppins font-medium bg-white px-2 absolute -top-[0.5rem] left-3">
                  SKU ID
                </p>
                <h1 className="text-[12px] font-Poppins mt-2 text-[#6D6D6D]">
                  Use this or tracking & shipping you orders
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="variants py-5 border-b-2 border-dashed ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-sm font-Poppins font-semibold">Variants</h1>
                <h1 className="text-sm font-Poppins text-[#6D6D6D]">
                  Like size, color, weight and so on ...
                </h1>
              </div>
              <IconButton
                onClick={() => setShowVariantInput(!showVariantInput)}
              >
                <i className="fi fi-rr-square-plus pt-1 px-2"></i>
              </IconButton>
            </div>

            {showVariantInput && (
              <div className="m-5 flex gap-10">
                <div className="relative">
                  <input
                    type="text"
                    maxLength={50}
                    minLength={3}
                    placeholder="Material"
                    className="w-full border-2 outline-[#f2707f] rounded-xl py-3 px-5 text-sm font-Poppins font-medium"
                    required
                    ref={materialRef}
                  />
                  <p className="text-sm font-Poppins font-medium bg-white px-2 absolute -top-[0.5rem] left-3">
                    Material
                  </p>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    maxLength={50}
                    minLength={3}
                    placeholder="Color"
                    className="w-full border-2 outline-[#f2707f] rounded-xl py-3 px-5 text-sm font-Poppins font-medium"
                    required
                    ref={colorRef}
                  />
                  <p className="text-sm font-Poppins font-medium bg-white px-2 absolute -top-[0.5rem] left-3">
                    Color
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="highlight py-5 border-b-2 ">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-sm font-Poppins font-semibold">
                  Highlight key item details
                </h1>
                <h1 className="text-sm font-Poppins text-[#6D6D6D]">
                  (optional)
                </h1>
              </div>
              <IconButton
                onClick={() => setShowHighlightsInput(!showHighlightsInput)}
              >
                <i className="fi fi-br-angle-small-down pt-1 px-2"></i>
              </IconButton>
            </div>

            {showHighlightsInput && (
              <div className="m-5 w-fit">
                <div className="relative">
                  <input
                    type="number"
                    maxLength={50}
                    minLength={3}
                    placeholder="Stock Available"
                    className="w-full border-2 outline-[#f2707f] rounded-xl py-3 px-5 text-sm font-Poppins font-medium"
                    required
                    ref={stockRef}
                  />
                  <p className="text-sm font-Poppins font-medium bg-white px-2 absolute -top-[0.5rem] left-3">
                    Stock
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="description py-5 border-b-2">
            <div className=" flex justify-between items-center">
              <div>
                <h1 className="text-sm font-Poppins font-semibold">
                  Add description, category & more
                </h1>
                <h1 className="text-sm font-Poppins text-[#6D6D6D]">
                  to improve shopping experience
                </h1>
              </div>
              <IconButton
                onClick={() => {
                  setShowDescriptionField(!showDescriptionField);
                }}
              >
                {showDescriptionField ? (
                  <i className="fi fi-br-angle-small-up pt-1 px-2"></i>
                ) : (
                  <i className="fi fi-br-angle-small-down pt-1 px-2"></i>
                )}
              </IconButton>
            </div>

            {showDescriptionField && (
              <div className="m-5 flex flex-col gap-5">
                <input
                  type="text"
                  maxLength={50}
                  minLength={3}
                  placeholder="Category"
                  className="w-full border-2 outline-[#f2707f] rounded-xl py-3 px-5 text-sm font-Poppins font-medium"
                  required
                  ref={categoryRef}
                />
                <textarea
                  placeholder="Add description, category & more"
                  className="border-2 w-full h-28 py-3 px-5 rounded-xl"
                  ref={descriptionRef}
                />
              </div>
            )}
          </div>

          <div className="weight py-5 mb-20">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className="text-sm font-Poppins font-semibold">
                  Add item weight
                </h1>
                <h1 className="text-sm font-Poppins text-[#6D6D6D]">
                  to help with shopping & logistics
                </h1>
              </div>
              <IconButton
                onClick={() => {
                  setShowWeightInput(!showWeightInput);
                }}
              >
                {showWeightInput ? (
                  <i className="fi fi-br-angle-small-up pt-1 px-2"></i>
                ) : (
                  <i className="fi fi-br-angle-small-down pt-1 px-2"></i>
                )}
              </IconButton>
            </div>

            {showWeightInput && (
              <div className="m-5 relative">
                <input
                  type="number"
                  placeholder="Add item weight"
                  className="border-2 w-full py-3 px-5 rounded-xl"
                  step="any"
                  inputMode="decimal"
                  ref={weightRef}
                />
                <span className="text-sm font-Poppins font-medium bg-white px-2 absolute top-[0.9rem] right-2">
                  Kg
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="text-center text-white py-5">
          <Button
            variant="contained"
            size="large"
            type="submit"
            className="button-shiny-effect"
            disabled={isLoading}
            sx={{
              borderRadius: 10,
              fontFamily: "Poppins",
              textTransform: "capitalize",
              backgroundColor: "#f2707f",
              ":hover": {
                backgroundColor: "#F7475C",
              },
            }}
          >
            {isLoading ? "Adding..." : "Add Product"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
