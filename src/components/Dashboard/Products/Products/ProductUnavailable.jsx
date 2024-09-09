import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "../../Layout/Toggle";
import {
  getAllProducts,
  toggleAvailability,
} from "../../../../store/reducers/productSlice";

const ProductUnavailable = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const toggleHandler = (id) => {
    dispatch(toggleAvailability(id))
      .then(() => {
        dispatch(getAllProducts());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex gap-5 md:gap-10 overflow-x-auto py-5 px-5 hide-scrollbar">
      {products
        .filter((item) => !item.available)
        .map((item) => (
          <div
            key={item._id}
            className="flex-shrink-0 drop-shadow-xl bg-white overflow-hidden"
          >
            <div className="px-4 pt-4">
              <div className="relative w-44 h-40 flex justify-center items-center bg-gray-100 overflow-hidden group">
                <img src={item.images} alt="" className="w-full" />
                <div className="w-full absolute bottom-0 py-2 flex justify-center gap-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <FormControlLabel
                    control={<IOSSwitch sx={{ ml: 3 }} />}
                    label=""
                    checked={item.available}
                    onChange={() => toggleHandler(item._id)}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-5">
              <div className="py-2">
                <h1 className="text-base lg:text-md font-Poppins font-semibold">
                  {item.name}
                </h1>
                <h1 className="text-[12px] font-Poppins font-medium">
                  ₹{item.price}
                  {item.discountedPrice ? (
                    <span className="pl-2 line-through text-slate-600 text-[10px]">
                      ₹{item.discountedPrice}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                </h1>
              </div>

              <div>
                <IconButton>
                  <i className="fi fi-rr-edit text-base text-black hover:text-[#f2707f] pt-1 px-2"></i>
                </IconButton>
                <IconButton>
                  <i className="fi fi-rr-trash text-base text-black hover:text-[#f2707f] pt-1 px-2"></i>
                </IconButton>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductUnavailable;
