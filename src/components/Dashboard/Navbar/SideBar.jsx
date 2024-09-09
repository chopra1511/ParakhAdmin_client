import { IconButton } from "@mui/material";
import "@flaticon/flaticon-uicons/css/all/all.css";
import SideNav from "./SideNav"; 

const SideBar = () => {
  return (
    <aside className="h-screen z-10">
      <div>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-musky cursor-pointer px-2">Parakh</h1>
            <IconButton>
              <i className="fi fi-br-apps pt-1 px-2 text-xl text-black hover:text-[#f2707f]"></i>
            </IconButton>
          </div>
        </div>

        <ul className="flex flex-col gap-2 p-5">
          <SideNav to="/" iconClass="fi fi-br-dashboard-monitor" label="Dashboard" />
          <SideNav to="/products" iconClass="fi fi-br-box-open-full" label="Products" />
          <SideNav to="/orders" iconClass="fi fi-br-order-history" label="Orders" />
          <SideNav to="/add-product" iconClass="fi fi-br-supplier" label="Add Product" />
          <SideNav to="/transactions" iconClass="fi fi-br-receipt" label="Transactions" />
          <SideNav to="/reviews" iconClass="fi fi-br-review" label="Reviews" />
          <SideNav to="/my-site" iconClass="fi fi-br-shop" label="My Site" />
          <SideNav to="/statistics" iconClass="fi fi-br-chart-pie-alt" label="Statistics" />
          <SideNav to="/account" iconClass="fi fi-br-user-pen" label="Account"/>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
