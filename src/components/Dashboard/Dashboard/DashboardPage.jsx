import React, { useEffect } from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import loading from "/assets/loading.gif";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../store/reducers/orderSlice";
import { getAllProducts } from "../../../store/reducers/productSlice";

const DashboardPage = () => {

  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.orders);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (!orders || orders.length === 0) {
      dispatch(getOrders());
    }
    if (!products || products.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, orders, products]);
  
  if (isLoading) {
    return (
      <div className="h-full flex flex-col justify-center items-center">
        <img src={loading} alt="" className="w-24" />
      </div>
    );
  }

  const revenue = orders.map((order) => {
    return order.order_details.amount;
  })

  const totalrevenue = revenue.reduce((acc, sum) => {
    return acc + sum;
  }, 0);
  
  const upi = orders.filter((order) => {
    return order.order_updated[0].payment_group === "upi"
  })

  const card = orders.filter((order) => {
    return order.order_updated[0].payment_group !== "upi";
  });

  const uData = [
    4000, 3000, 2000, 2780, 1890, 2390, 3490, 3000, 2000, 2780, 1890, 2390,
  ];
  const pData = [
    2400, 1398, 9800, 3908, 4800, 3800, 4300, 1398, 9800, 3908, 4800, 3800,
  ];
  const xLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="h-full p-5 animate-wiggle">
      <div className="h-full container">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-Pacifico text-[#f2707f]">Your</h1>
          <h1 className="text-2xl font-Lemon font-bold text-center">
            Dashboard
          </h1>
        </div>

        <div className="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <div className="revenue w-fit flex items-center gap-5 p-3 rounded-xl bg-white drop-shadow-xl">
            <div className="p-2 flex items-center bg-[#ccf0d1] rounded-full">
              <i className="fi fi-rr-usd-circle pt-1 px-1 rounded-full text-4xl text-[#00b517]"></i>
            </div>

            <div>
              <h1 className="text-base font-Poppins font-semibold">Revenue</h1>
              <p className="text-xl font-Poppins font-bold text-[#00b517]">
                ₹{totalrevenue}
              </p>
              <p className="text-[12px] text-gray-500 font-Poppins font-medium">
                Shipping fees included
              </p>
            </div>
          </div>

          <div className="orders w-fit flex items-center gap-5 p-3 rounded-xl bg-white drop-shadow-xl">
            <div className="p-2 flex items-center bg-[#E3F4F4] rounded-full">
              <i className="fi fi-rr-truck-check pt-1 px-1  text-4xl text-[#80B5B5]"></i>
            </div>

            <div>
              <h1 className="text-base font-Poppins font-semibold">Orders</h1>
              <p className="text-xl font-Poppins font-bold text-[#80B5B5]">
                {orders.length}
              </p>
              <p className="text-[12px] text-gray-500 font-Poppins font-medium">
                Including orders in transit
              </p>
            </div>
          </div>

          <div className="products w-fit flex items-center gap-5 p-3 rounded-xl bg-white drop-shadow-xl">
            <div className="p-2 flex items-center bg-[#ffe8d0] rounded-full">
              <i className="fi fi-rr-box-open-full pt-1 px-1  text-4xl text-[#fea64b]"></i>
            </div>

            <div>
              <h1 className="text-base font-Poppins font-semibold">Products</h1>
              <p className="text-xl font-Poppins font-bold text-[#fea64b]">
                {products.length}
              </p>
              <p className="text-[12px] text-gray-500 font-Poppins font-medium">
                Included Categories
              </p>
            </div>
          </div>

          <div className="Earning w-fit flex items-center gap-5 p-3 rounded-xl bg-white drop-shadow-xl">
            <div className="p-2 flex items-center bg-[#D0E7D2] rounded-full">
              <i className="fi fi-rr-piggy-bank pt-1 px-1  text-4xl text-[#618264]"></i>
            </div>

            <div>
              <h1 className="text-base font-Poppins font-semibold">
                Monthly Earning
              </h1>
              <p className="text-xl font-Poppins font-bold text-[#618264]">
                ₹{totalrevenue}
              </p>
              <p className="text-[12px] text-gray-500 font-Poppins font-medium">
                Based in your local time.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 px-10 flex flex-wrap lg:flex-col xl:flex-row gap-10 justify-between">
          <div className="bg-white p-5 rounded-xl drop-shadow-xl w-fit">
            <h1 className="text-base font-Poppins font-semibold">
              Sale statistics
            </h1>
            <LineChart
              width={550}
              height={300}
              series={[
                { data: pData, label: "Sales", color: "#91DDCF" },
                { data: uData, label: "Payouts", color: "#fea64b" },
              ]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
            />
          </div>

          <div className="bg-white p-5 rounded-xl drop-shadow-xl w-fit">
            <h1 className="text-base font-Poppins font-semibold">
              Preferred Payment Methods
            </h1>

            <PieChart
              width={400}
              height={300}
              series={[
                {
                  data: [
                    {
                      value: `${card.length}`,
                      label: "Card",
                      color: "#ccf0d1",
                    },
                    { value: `${upi.length}`, label: "UPI", color: "#E7B5AC" },
                  ],
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                  endAngle: 180,
                  cx: 150,
                  cy: 150,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
