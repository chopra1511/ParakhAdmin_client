import { Button, IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getOrderDetails,
  updateTracking,
} from "../../../store/reducers/orderSlice";

const OrderDetails = () => {
  const { orderDetails } = useSelector((state) => state.orders);

  const [completedSteps, setCompletedSteps] = useState({
    confirmedOrder: orderDetails.order_tracking.confirmedOrder,
    processingOrder: orderDetails.order_tracking.processingOrder,
    productDispatched: orderDetails.order_tracking.productDispatched,
    productDelivered: orderDetails.order_tracking.productDelivered,
  });

    
  const [showTrack, setShowTrack] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const trackingIdRef = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   console.log(orderDetails);


  const handleIconClick = (step) => {
    setCompletedSteps((prevState) => {
      // Toggle the step completion
      const updatedSteps = {
        ...prevState,
        [step]: !prevState[step],
      };

      // Prepare the tracking update data
      const trackingUpdate = {
        ...updatedSteps,
        trackingId,
      };

      // Dispatch the tracking update
      dispatch(
        updateTracking({ orderId: orderDetails._id, tracking: trackingUpdate })
      )
        .then(() => {
          dispatch(getOrderDetails(orderDetails._id));
        })
        .catch((err) => {
          console.error(err);
        });

      return updatedSteps; // Update the state with the toggled step
    });
  };


  const getLineStyle = (fromStep, toStep) => {
    if (
      orderDetails.order_tracking[fromStep] &&
      orderDetails.order_tracking[toStep]
    ) {
      return "bg-[#F2707F]";
    } else if (orderDetails.order_tracking[fromStep]) {
      return "bg-gradient-to-r from-[#F2707F] to-bg-gray-200";
    } else {
      return "bg-gray-200";
    }
    };
    
  const dateObject = new Date(orderDetails.order_created.created_at);


  const formHandler = (e) => {
    e.preventDefault();
    setTrackingId(trackingIdRef.current.value);
  };

  return (
    <div className="p-5">
      <div className="h-full container bg-white p-5 rounded-2xl drop-shadow-xl">
        <div className="flex flex-col items-center relative">
          <h1 className="text-xl font-Pacifico text-[#f2707f]">Order</h1>
          <h1 className="text-2xl font-Lemon font-bold text-center">Details</h1>
        </div>

        <div className="absolute top-5">
          <IconButton onClick={() => navigate(-1)}>
            <i className="fi fi-rr-arrow-small-left pt-1 px-2 hover:text-[#f2707f]"></i>
          </IconButton>
        </div>

        <div className="px-20 mt-5">
          <h1 className="text-sm font-Poppins">
            Details for Order Id:{" "}
            <span className="font-semibold uppercase">
              {orderDetails.order_created.order_id}
            </span>
          </h1>
        </div>

        <div className="px-20 py-5">
          <div className="flex items-center justify-between border-b-2">
            <div className="flex items-center gap-2">
              <i className="fi fi-rr-calendar-day text-2xl"></i>
              <h1 className="text-sm font-Poppins font-medium">
                {dateObject.toLocaleDateString().replace(/\//g, "-")},{" "}
                {dateObject.toLocaleTimeString()}
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <select
                name="filter"
                id="filter"
                className="w-44 text-center border-2 rounded-xl"
              >
                <option value="Status">Status</option>
                <option value="Active">Active</option>
                <option value="Success">Success</option>
                <option value="Pending">Pending</option>
                <option value="Failure">Failure</option>
              </select>
              <div>
                <Button
                  variant="contained"
                  type="submit"
                  className="button-shiny-effect"
                  sx={{
                    borderRadius: "10px",
                    fontFamily: "Poppins",
                    textTransform: "capitalize",
                    backgroundColor: "#f2707f",
                    fontSize: "12px",
                    ":hover": {
                      backgroundColor: "#F7475C",
                    },
                  }}
                >
                  Save
                </Button>
              </div>
              <IconButton>
                <i className="fi fi-rr-print text-2xl pt-1 px-2 text-black hover:text-[#f2707f]"></i>
              </IconButton>
            </div>
          </div>

          <div className="flex justify-between py-10 border-b-2">
            <div className="customer flex gap-5 w-1/3">
              <div className="w-fit h-fit p-2 flex items-center bg-[#ffe8d0] rounded-full">
                <i className="fi fi-br-circle-user pt-1 px-1 rounded-full text-4xl text-[#fea64b]"></i>
              </div>
              <div>
                <h1 className="text-base font-Poppins font-semibold">
                  Customer
                </h1>
                <h1 className="text-sm font-Poppins font-medium text-gray-500">
                  Name :{" "}
                  {orderDetails.order_created.customer_details.customer_name}
                </h1>
                <h1 className="text-sm font-Poppins font-medium text-gray-500">
                  Email :{" "}
                  {orderDetails.order_created.customer_details.customer_email}
                </h1>
                <h1 className="text-sm font-Poppins font-medium text-gray-500">
                  Phone :{" "}
                  {orderDetails.order_created.customer_details.customer_phone}
                </h1>
              </div>
            </div>

            <div className="orderInfo flex gap-5 w-1/3">
              <div className="w-fit h-fit p-2 flex items-center bg-[#E3F4F4] rounded-full">
                <i className="fi fi-rr-truck-check pt-1 px-1 rounded-full text-4xl text-[#80B5B5]"></i>
              </div>
              <div>
                <h1 className="text-base font-Poppins font-semibold">
                  Order Info
                </h1>
                <h1 className="text-sm font-Poppins font-medium text-gray-500">
                  Shipping : Parakh
                </h1>
                <h1 className="text-sm font-Poppins capitalize font-medium text-gray-500">
                  Payment Method: {orderDetails.order_updated[0].payment_group}
                </h1>
                <h1 className="text-sm font-Poppins font-medium text-gray-500">
                  Status: {orderDetails.order_updated[0].payment_status}
                </h1>
              </div>
            </div>

            <div className="delivery flex gap-5 w-1/3">
              <div className="w-fit h-fit p-2 flex items-center bg-[#ccf0d1] rounded-full">
                <i className="fi fi-br-marker pt-1 px-1 rounded-full text-4xl text-[#00b517]"></i>
              </div>
              <div>
                <h1 className="text-base font-Poppins font-semibold">
                  Deliver To
                </h1>
                <h1 className="text-sm font-Poppins font-medium text-gray-500">
                  Address :{" "}
                  {orderDetails.order_details.customer.address.address},<br />
                  {orderDetails.order_details.customer.address.city},{" "}
                  {orderDetails.order_details.customer.address.state},{" "}
                  {orderDetails.order_details.customer.address.pincode}
                </h1>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-between">
            <div className="w-1/2">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                      Product
                    </th>
                    <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                      Price
                    </th>
                    <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                      Quantity
                    </th>
                    <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {orderDetails.order_details.cart.map((item) => {
                    return (
                      <tr className="border-b-2" key={item.product._id}>
                        <td className="text-sm py-2 font-Poppins font-medium">
                          <div className="flex items-center justify-evenly">
                            <img
                              src={item.product.images}
                              alt=""
                              className="w-10 h-10 object-cover rounded"
                            />
                            <h1>{item.product.name}</h1>
                          </div>
                        </td>
                        <td className="text-sm py-2 font-Poppins font-medium">
                          ₹{item.product.price}
                        </td>
                        <td className="text-sm py-2 font-Poppins font-medium">
                          {item.quantity}
                        </td>
                        <td className="text-sm py-2 font-Poppins font-medium">
                          ₹{item.totalPrice}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="text-right">
                    <td></td>
                    <td></td>
                    <td className="text-sm font-Poppins py-2 font-medium">
                      Sub Total :
                    </td>
                    <td className="text-sm font-Poppins py-2 font-medium text-center">
                      ₹{orderDetails.order_details.amount}
                    </td>
                  </tr>

                  <tr className="text-right">
                    <td></td>
                    <td></td>
                    <td className="text-sm font-Poppins py-2 font-medium">
                      Shipping Cost :
                    </td>
                    <td className="text-sm font-Poppins py-2 font-medium text-center">
                      ₹80
                    </td>
                  </tr>

                  <tr className="text-right">
                    <td></td>
                    <td></td>
                    <td className="text-sm font-Poppins py-2 font-medium">
                      Grand Total :
                    </td>
                    <td className="text-base font-Poppins font-bold text-center">
                      ₹{orderDetails.order_details.amount + 80}
                    </td>
                  </tr>

                  <tr className="text-right">
                    <td></td>
                    <td></td>
                    <td className="text-[12px] font-Poppins font-medium">
                      Status :
                    </td>
                    <td className="text-[12px] font-semibold font-Poppins">
                      <div className="flex justify-center items-center">
                        <h1
                          className={`w-fit px-2 py-1 rounded-full ${
                            orderDetails.order_updated[0]?.payment_status
                              ? orderDetails.order_updated[0].payment_status ===
                                "SUCCESS"
                                ? "bg-[#ccf0d1] text-[#006d0e]"
                                : "bg-[#fdcccc] text-[#920000]"
                              : "bg-[#ffe8d0] text-[#98530c]"
                          }`}
                        >
                          {orderDetails.order_updated[0]?.payment_status ||
                            "ACTIVE"}
                        </h1>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-5">
              <div className="payment-info p-5 bg-gray-100 rounded-xl drop-shadow">
                <h1 className="mb-3 text-base font-Poppins font-semibold">
                  Payment Info
                </h1>
                <h1 className="text-sm font-Poppins ">
                  Master Card - **** **** 4578
                </h1>
                <h1 className="text-sm font-Poppins ">
                  Business Name - Grand Market LLC
                </h1>
                <h1 className="text-sm font-Poppins ">
                  Phone -{" "}
                  {orderDetails.order_created.customer_details.customer_phone}
                </h1>
              </div>

              <div className="notes-form">
                <form onSubmit={formHandler}>
                  <h1 className="text-base font-Poppins font-semibold">
                    Notes
                  </h1>
                  <textarea
                    className="w-full h-28 font-Poppins text-sm bg-gray-100 outline-none p-2 rounded-md"
                    ref={trackingIdRef}
                    placeholder="Add notes here"
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    className="button-shiny-effect"
                    sx={{
                      borderRadius: "10px",
                      fontFamily: "Poppins",
                      textTransform: "capitalize",
                      backgroundColor: "#f2707f",
                      fontSize: "12px",
                      ":hover": {
                        backgroundColor: "#F7475C",
                      },
                    }}
                  >
                    Save Note
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="track-button">
            <Button
              variant="contained"
              type="submit"
              className="button-shiny-effect"
              onClick={() => setShowTrack(!showTrack)}
              sx={{
                borderRadius: "10px",
                fontFamily: "Poppins",
                textTransform: "capitalize",
                backgroundColor: "#f2707f",
                fontSize: "16px",
                ":hover": {
                  backgroundColor: "#F7475C",
                },
              }}
            >
              View Order Tracking
            </Button>

            {showTrack && (
              <div className="mt-10">
                <div className="flex justify-between">
                  <div className="flex flex-col items-center relative">
                    <div
                      className={`w-fit h-fit p-2 flex items-center rounded-full cursor-pointer ${
                        orderDetails.order_tracking.confirmedOrder
                          ? "bg-[#F2707F]"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleIconClick("confirmedOrder")}
                    >
                      <i
                        className={`fi fi-rr-shopping-cart-check pt-1 px-1.5 rounded-full text-2xl ${
                          orderDetails.order_tracking.confirmedOrder
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      ></i>
                    </div>
                    <div className="text-center mt-2">
                      <h1 className="text-sm font-Poppins font-medium text-gray-700">
                        Order Confirmed
                      </h1>
                      <h1 className="text-sm font-Poppins font-medium text-gray-500">
                        {dateObject.toLocaleDateString().replace(/\//g, "-")}
                      </h1>
                    </div>
                    <div
                      className={`absolute top-6 left-24 h-0.5 w-52 ${getLineStyle(
                        "confirmedOrder",
                        "processingOrder"
                      )}`}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center relative">
                    <div
                      className={`w-fit h-fit p-2 flex items-center rounded-full cursor-pointer ${
                        orderDetails.order_tracking.processingOrder
                          ? "bg-[#F2707F]"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleIconClick("processingOrder")}
                    >
                      <i
                        className={`fi fi-rr-truck-loading pt-1 px-1.5 rounded-full text-2xl ${
                          orderDetails.order_tracking.processingOrder
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      ></i>
                    </div>
                    <div className="text-center mt-2">
                      <h1 className="text-sm font-Poppins font-medium text-gray-700">
                        Processing Order
                      </h1>
                      <h1 className="text-sm font-Poppins font-medium text-gray-500">
                        {dateObject.toLocaleDateString().replace(/\//g, "-")}
                      </h1>
                    </div>
                    <div
                      className={`absolute top-6 left-24 h-0.5 w-52 ${getLineStyle(
                        "processingOrder",
                        "productDispatched"
                      )}`}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center relative">
                    <div
                      className={`w-fit h-fit p-2 flex items-center rounded-full cursor-pointer ${
                        orderDetails.order_tracking.productDispatched
                          ? "bg-[#F2707F]"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleIconClick("productDispatched")}
                    >
                      <i
                        className={`fi fi-rr-truck-check pt-1 px-1.5 rounded-full text-2xl ${
                          orderDetails.order_tracking.productDispatched
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      ></i>
                    </div>
                    <div className="text-center mt-2">
                      <h1 className="text-sm font-Poppins font-medium text-gray-700">
                        Product Dispatched
                      </h1>
                      <h1 className="text-sm font-Poppins font-medium text-gray-500">
                        {dateObject.toLocaleDateString().replace(/\//g, "-")}
                      </h1>
                    </div>
                    <div
                      className={`absolute top-6 left-28 h-0.5 w-52 ${getLineStyle(
                        "productDispatched",
                        "productDelivered"
                      )}`}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center relative">
                    <div
                      className={`w-fit h-fit p-2 flex items-center rounded-full cursor-pointer ${
                        orderDetails.order_tracking.productDelivered
                          ? "bg-[#F2707F]"
                          : "bg-gray-200"
                      }`}
                      onClick={() => handleIconClick("productDelivered")}
                    >
                      <i
                        className={`fi fi-rr-location-alt pt-1 px-1.5 rounded-full text-2xl ${
                          orderDetails.order_tracking.productDelivered
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                      ></i>
                    </div>
                    <div className="text-center mt-2">
                      <h1 className="text-sm font-Poppins font-medium text-gray-700">
                        Product Delivered
                      </h1>
                      <h1 className="text-sm font-Poppins font-medium text-gray-500">
                        {dateObject.toLocaleDateString().replace(/\//g, "-")}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
