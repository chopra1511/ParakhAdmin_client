import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import loading from "/assets/loading.gif";
import { IconButton, Typography } from "@mui/material";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getAllProducts } from "../../../../store/reducers/productSlice";
import ProductUnavailable from "./ProductUnavailable";

export default function ColorTabs() {
  const [value, setValue] = useState("one");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const availableCount = products.filter((product) => product.available).length;
  const unavailableCount = products.filter(
    (product) => !product.available
  ).length;

  if (isLoading) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <img src={loading} alt="" className="w-24" />
      </div>
    );
  }

  return (
    <Box className="px-10">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="product tabs"
        sx={{
          "& .MuiTabs-flexContainer": {
            borderRadius: "10px",
            backgroundColor: "#f4f4f4",
            padding: "5px",
            display: "flex",
            justifyContent: "center",
            gap: 2,
            width: "fit-content",
          },
          "& .MuiTab-root": {
            minWidth: "auto",
            padding: "8px 16px",
            fontSize: "1rem",
            textTransform: "none",
            fontFamily: "Poppins",
            borderRadius: "8px",
            transition: "background-color 0.3s ease-in-out",
          },
          "& .MuiTabs-scroller": {
            display: "flex",
            justifyContent: "center",
          },
          "& .Mui-selected": {
            color: "black",
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <Tab value="one" label={`Available (${availableCount})`} />
        <Tab value="two" label={`Unavailable (${unavailableCount})`} />
        <Tab value="three" label="Category" />
      </Tabs>

      <Box sx={{ p: 5 }}>
        {value === "one" && (
          <Typography variant="body1">
            {availableCount ? (
              <ProductList />
            ) : (
              <div className="text-center mt-10">
                <h1 className="text-xl font-Poppins font-bold">
                  No products are added
                </h1>
                <h1 className="text-sm font-Poppins font-medium">
                  Products added for purchase will show up here
                </h1>
                <h1
                  className="mt-5 text-sm font-Poppins font-semibold underline text-[#f2707f] cursor-pointer"
                  onClick={() => navigate("/add-product")}
                >
                  Add Product
                </h1>
              </div>
            )}
          </Typography>
        )}
        {value === "two" && (
          <Typography variant="body1">
            {unavailableCount ? (
              <ProductUnavailable />
            ) : (
              <div className="text-center mt-10">
                <h1 className="text-xl font-Poppins font-bold">
                  No products are unavailable
                </h1>
                <h1 className="text-sm font-Poppins font-medium">
                  Products marked as unavailable for purchase will show up here
                </h1>
              </div>
            )}
          </Typography>
        )}
        {value === "three" && (
          <Typography variant="body1">Content for Category</Typography>
        )}
      </Box>
    </Box>
  );
}
