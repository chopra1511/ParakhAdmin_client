import { IconButton } from "@mui/material";
import loading from "/assets/loading.gif";
import io from "socket.io-client";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../store/reducers/orderSlice";

const Transactions = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.orders);

  useEffect(() => {
    const socket = io("http://localhost:8080");

    // Listen for orderCreated event
    socket.on("orderCreated", () => {
      dispatch(getOrders());
    });

    // Listen for orderUpdated event
    socket.on("orderUpdated", () => {
      dispatch(getOrders());
    });

    return () => {
      socket.disconnect(); // Clean up when component unmounts
    };
  }, [dispatch]);

  const toggleMenu = (id) => {
    if (activeMenu === id) {
      setActiveMenu(null);
    } else {
      setActiveMenu(id);
    }
  };

  if (isLoading) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <img src={loading} alt="" className="w-24" />
      </div>
    );
  }

  return (
    <div className="h-full p-5 ">
      <div className="h-full container bg-white p-5 rounded-2xl drop-shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-Pacifico text-[#f2707f]">All</h1>
          <h1 className="text-2xl font-Lemon font-bold text-center">
            Transactions
          </h1>
        </div>

        <nav className="px-10 py-5 flex justify-between border-b-2 border-dashed">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="text-sm font-Poppins border-b-2 border-[#767675] outline-none text-center py-1 px-3"
            />
            <IconButton>
              <i className="fi fi-br-search text-xl pt-1 px-2 text-black hover:text-[#f2707f]"></i>
            </IconButton>
          </div>

          <div className="flex gap-10">
            <select
              name="Method"
              id="Method"
              className="w-44 text-center border-2 rounded-xl text-sm font-Poppins font-medium"
            >
              <option value="10">Show all</option>
              <option value="20">UPI</option>
              <option value="30">Card</option>
            </select>
          </div>
        </nav>

        <div className="mt-5">
          <table className="w-full">
            <thead className="bg-[#f4f4f4]">
              <tr>
                <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                  Transaction ID
                </th>
                <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                  Paid
                </th>
                <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                  Method
                </th>
                <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                  Status
                </th>
                <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                  Date & Time
                </th>
                <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((transaction) => {
                const dateObject = new Date(
                  transaction.order_updated[0].payment_time
                );
                return (
                  <tr key={transaction.id} className="text-center border-b-2">
                    <td className="text-sm font-medium font-Poppins">
                      {transaction.order_updated[0].cf_payment_id}
                    </td>
                    <td className="text-sm font-medium font-Poppins">
                      {transaction.order_updated[0].order_amount}
                    </td>
                    <td className="text-sm font-medium font-Poppins uppercase">
                      {transaction.order_updated[0].payment_group === "upi"
                        ? "upi"
                        : "card"}
                    </td>
                    <td className="text-sm font-medium font-Poppins">
                      <div className="flex justify-center items-center">
                        <h1
                          className={`w-fit text-[12px] font-semibold px-2 py-1 rounded-full ${
                            transaction.order_updated[0].payment_status ===
                            "PENDING"
                              ? "bg-[#ffe8d0] text-[#98530c]"
                              : transaction.order_updated[0].payment_status ===
                                "SUCCESS"
                              ? "bg-[#ccf0d1] text-[#006d0e]"
                              : "bg-[#fdcccc] text-[#920000]"
                          }`}
                        >
                          {transaction.order_updated[0].payment_status}
                        </h1>
                      </div>
                    </td>
                    <td className="text-sm font-medium font-Poppins">
                      {dateObject.toLocaleDateString().replace(/\//g, "-")},
                      <br />
                      <span className="text-[12px]">
                        {dateObject.toLocaleTimeString()}
                      </span>
                    </td>
                    <td className="relative flex flex-col items-center px-2">
                      <IconButton
                        onClick={() =>
                          toggleMenu(transaction.order_updated[0].cf_payment_id)
                        }
                      >
                        <i className="fi fi-br-menu-dots text-base text-black hover:text-[#f2707f] pt-1 px-2"></i>
                      </IconButton>
                      {activeMenu ===
                        transaction.order_updated[0].cf_payment_id && (
                        <div className="text-left w-fit p-2 bg-[#f4f4f4] flex flex-col gap-2 rounded-xl absolute top-12 z-10">
                          <h1 className="text-[12px] font-Poppins font-medium cursor-pointer hover:bg-white rounded-xl px-5 py-2">
                            View Details
                          </h1>
                          <h1 className="text-[12px] font-Poppins font-medium cursor-pointer hover:bg-white rounded-xl px-5 py-2">
                            Edit
                          </h1>
                          <h1 className="text-[12px] font-Poppins font-medium cursor-pointer hover:bg-white rounded-xl px-5 py-2">
                            Delete
                          </h1>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
