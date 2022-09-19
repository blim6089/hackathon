import React from "react";
import Button from "../../common/Button";
import Logo from "../../../assets/logo.svg";
import Shadow from "../../../assets/shadows/6.png";

const Header = () => {
  const routes = [
    { id: "home", path: "/", label: "Home" },
    { id: "about", path: "/about", label: "About" },
    { id: "resources", path: "/resources", label: "Resources" },
    { id: "register", path: "/register", label: "Register" },
  ];

  return (
    <div className="px-5 py-10 relative z-10">
      <img src={Shadow} className="absolute top-0 right-0" alt=":( Not Found" />
      <div className="max-w-container mx-auto relative z-10 flex justify-between items-center relative">
        <img src={Logo} className="opacity-50" alt="logo" />
        <ul className="absolute left-1/2 -translate-x-1/2 flex">
          {routes.map((route) => (
            <li
              key={route.id}
              className={`font-medium text-base mx-[18px] cursor-pointer ${
                route.id === `home` ? `text-warning` : `text-dark opacity-40`
              }`}
            >
              {route.label}
            </li>
          ))}
        </ul>
        <Button>Join Slack</Button>
      </div>
    </div>
  );
};

export default Header;
