import "@flaticon/flaticon-uicons/css/all/all.css";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const navigate = useNavigate();


  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="bg-white z-10">
      <nav className="flex justify-between items-center py-3 px-5">
          <h1
            className="text-3xl font-musky cursor-pointer px-2"
            onClick={() => navigate("/")}
          >
            Parakh
          </h1>
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            {searchBar && (
              <input
                type="text"
                placeholder="Search"
                className="text-base font-Poppins border-b-2 border-[#767675] outline-none text-center py-1 px-3"
              />
            )}
            <IconButton onClick={() => setSearchBar(!searchBar)}>
              <i className="fi fi-br-search text-xl pt-1 px-2 text-black hover:text-[#f2707f]"></i>
            </IconButton>
          </div>
          <IconButton>
            <Badge color="error" variant="dot">
              <i className="fi fi-br-bell text-xl pt-1 px-2 text-black hover:text-[#f2707f]"></i>
            </Badge>
          </IconButton>

          <IconButton>
            <i className="fi fi-br-brightness text-xl pt-1 px-2 text-black hover:text-[#f2707f]"></i>
          </IconButton>

          <IconButton onClick={toggleFullScreen}>
            <i className="fi fi-br-expand text-xl pt-1 px-2 text-black hover:text-[#f2707f]"></i>
          </IconButton>

          <IconButton>
            <i className="fi fi-br-world text-xl pt-1 px-2 text-black hover:text-[#f2707f]"></i>
          </IconButton>

          <IconButton>
            <Avatar sx={{ bgcolor: "#f2707f" }}>P</Avatar>
          </IconButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
