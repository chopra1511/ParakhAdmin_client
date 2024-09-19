import { IconButton } from "@mui/material";
import "@flaticon/flaticon-uicons/css/all/all.css";
import SideNav from "./SideNav";
import { useNavigate } from "react-router";

const SideBar = ({ hideSideBar, setHideSideBar }) => {
  const navigate = useNavigate();
  return (
    <aside className="h-screen z-10">
      <div>
        <div className="px-5 py-4">
          <div className="w-fit">
            <IconButton
              onClick={() => {
                setHideSideBar(!hideSideBar);
              }}
              // sx={{ marginLeft: "5px" }}
            >
              <i
                className={`fi ${
                  hideSideBar ? "fi-br-apps-add" : "fi-br-apps-delete"
                } pt-1 px-2 text-xl text-black hover:text-[#f2707f]`}
              ></i>
            </IconButton>
            {/* {!hideSideBar && (
              <h1
                className="text-3xl font-musky cursor-pointer px-2"
                onClick={() => navigate("/")}
              >
                Parakh
              </h1>
            )} */}
          </div>
        </div>

        <ul className="flex flex-col gap-2 p-5">
          <SideNav
            to="dashboard"
            iconClass="fi fi-br-dashboard-monitor"
            label="Dashboard"
            hideSideBar={hideSideBar}
          />
          <SideNav
            to="products"
            iconClass="fi fi-br-box-open-full"
            label="Products"
            hideSideBar={hideSideBar}
          />
          <SideNav
            to="orders"
            iconClass="fi fi-br-order-history"
            label="Orders"
            hideSideBar={hideSideBar}
          />
          <SideNav
            to="add-product"
            iconClass="fi fi-br-supplier"
            label="Add Product"
            hideSideBar={hideSideBar}
          />
          <SideNav
            to="transactions"
            iconClass="fi fi-br-receipt"
            label="Transactions"
            hideSideBar={hideSideBar}
          />
          <SideNav
            to="reviews"
            iconClass="fi fi-br-review"
            label="Reviews"
            hideSideBar={hideSideBar}
          />
          <SideNav
            to="my-site"
            iconClass="fi fi-br-shop"
            label="My Site"
            hideSideBar={hideSideBar}
          />
          <SideNav
            to="statistics"
            iconClass="fi fi-br-chart-pie-alt"
            label="Statistics"
            hideSideBar={hideSideBar}
          />
          <SideNav
            to="account"
            iconClass="fi fi-br-user-pen"
            label="Account"
            hideSideBar={hideSideBar}
          />
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
