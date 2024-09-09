import { IconButton } from "@mui/material";
import loading from "/assets/loading.gif";
import io from "socket.io-client";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, getOrders } from "../../../store/reducers/orderSlice";
import { useNavigate } from "react-router";

const Orders = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, isLoading } = useSelector((state) => state.orders);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(10);
  const [newOrderIds, setNewOrderIds] = useState([]);

  useEffect(() => {
    dispatch(getOrders());

    const socket = io("http://localhost:8080");

    // Listen for orderCreated event
    socket.on("orderCreated", (newOrder) => {
      console.log("New order created");
      dispatch(getOrders());
      setNewOrderIds((prevIds) => [
        ...prevIds,
        newOrder.order_created.order_id,
      ]);
    });

    // Listen for orderUpdated event
    socket.on("orderUpdated", () => {
      console.log("Order updated");
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

  const orderDetailsHandler = (id) => {
    dispatch(getOrderDetails(id))
      .then(() => {
        navigate("/order-details");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOrdersPerPageChange = (e) => {
    setOrdersPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing orders per page
  };

  if (isLoading) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <img src={loading} alt="" className="w-24" />
      </div>
    );
  }

  // Calculate orders to display for the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const sortedOrders = [...currentOrders].sort((a, b) => {
    return (
      new Date(b.order_created.created_at) -
      new Date(a.order_created.created_at)
    );
  });

  // Calculate total pages
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="h-full p-5">
      <div className="h-full container bg-white p-5 rounded-2xl drop-shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-Pacifico text-[#f2707f]">All</h1>
          <h1 className="text-2xl font-Lemon font-bold text-center">Orders</h1>
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

            <select
              name="show"
              id="show"
              className="w-44 text-center border-2 rounded-xl"
              value={ordersPerPage}
              onChange={handleOrdersPerPageChange}
            >
              <option value="10">Show 10</option>
              <option value="20">Show 20</option>
              <option value="30">Show 30</option>
              <option value="40">Show 40</option>
            </select>
          </div>
        </nav>

        <table className="w-full mt-5">
          <thead className="bg-[#f4f4f4]">
            <tr>
              <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                #ID
              </th>
              <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                Name
              </th>
              <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                Email
              </th>
              <th className="text-sm py-2 font-semibold font-Poppins text-[#767675]">
                Total
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
            {sortedOrders.map((order) => {
              const dateObject = new Date(order.order_created.created_at);
              const isNewOrder = newOrderIds.includes(
                order.order_created.order_id
              );
              return (
                <tr
                  key={order.order_created.order_id}
                  className={`text-center border-b-2 ${
                    isNewOrder ? "bg-gray-200" : ""
                  }`}
                >
                  <td className="relative text-sm uppercase font-medium font-Poppins">
                    {isNewOrder && (
                      <span className="absolute top-3 -left-1 capitalize text-white font-medium font-Poppins ml-2">
                        <i className="fi fi-sr-bullet text-xl text-[#f2707f]"></i>
                      </span>
                    )}
                    {order.order_created.order_id}
                  </td>
                  <td className="text-sm font-medium font-Poppins">
                    {order.order_created.customer_details.customer_name}
                  </td>
                  <td className="text-sm font-medium font-Poppins">
                    {order.order_created.customer_details.customer_email}
                  </td>
                  <td className="text-sm font-medium font-Poppins">
                    ₹{order.order_created.order_amount}
                  </td>
                  <td className="text-[12px] font-medium font-Poppins">
                    <div className="flex justify-center items-center">
                      <h1
                        className={`w-fit px-2 py-1 rounded-full ${
                          order.order_updated[0]?.payment_status
                            ? order.order_updated[0].payment_status ===
                              "SUCCESS"
                              ? "bg-[#ccf0d1] text-[#006d0e]"
                              : "bg-[#fdcccc] text-[#920000]"
                            : "bg-[#ffe8d0] text-[#98530c]"
                        }`}
                      >
                        {order.order_updated[0]?.payment_status || "ACTIVE"}
                      </h1>
                    </div>
                  </td>
                  <td className="text-sm font-medium font-Poppins">
                    {dateObject.toLocaleDateString().replace(/\//g, "-")},<br />
                    <span className="text-[12px]">
                      {dateObject.toLocaleTimeString()}
                    </span>
                  </td>
                  <td className="relative flex flex-col items-center px-2">
                    <IconButton
                      onClick={() => toggleMenu(order.order_created.order_id)}
                    >
                      <i className="fi fi-br-menu-dots text-base text-black hover:text-[#f2707f] pt-1 px-2"></i>
                    </IconButton>
                    {activeMenu === order.order_created.order_id && (
                      <div className="text-left w-fit p-2 bg-[#f4f4f4] flex flex-col gap-2 rounded-xl absolute top-12 z-10">
                        <h1
                          className="text-[12px] font-Poppins font-medium cursor-pointer hover:bg-white rounded-xl px-5 py-2"
                          onClick={() => orderDetailsHandler(order._id)}
                        >
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

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-5 fixed bottom-0 left-0 right-0">
          <IconButton onClick={handlePreviousPage} disabled={currentPage === 1}>
            <i className="fi fi-rr-angle-circle-left pt-1 px-2 text-2xl hover:text-[#f2707f]"></i>
          </IconButton>
          <span className="text-sm font-Poppins">
            Page {currentPage} of {totalPages}
          </span>
          <IconButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <i className="fi fi-rr-angle-circle-right pt-1 px-2 text-2xl hover:text-[#f2707f]"></i>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Orders;
