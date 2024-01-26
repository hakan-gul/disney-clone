import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiTv,
  HiPlayCircle,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div className="flex gap-8 items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[80px] md:w-[115px] object-cover"
          />
          <div className="hidden md:flex gap-8">
            {menu.map((item) => {
              return <HeaderItem name={item.name} Icon={item.icon} />;
            })}
          </div>
          <div className="flex md:hidden gap-5">
            {menu.map(
              (item, i) => i < 3 && <HeaderItem name={""} Icon={item.icon} />
            )}
          </div>

          <div className="flex md:hidden" onClick={handleToggle}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-7 border-[1px] p-3 px-5 pt-5 bg-[#121212] border-gray-700">
                {menu.map(
                  (item, i) =>
                    i > 2 && (
                      <div className="mb-3">
                        <HeaderItem name={item.name} Icon={item.icon} />
                      </div>
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p className=" text-gray-200 hidden lg:block">Hakan</p>
          <img
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EACE56EDBBEE93B7E563E50EC2F8ECB4EB7762AF61CBAAC79A6BED4D7FFB2554/scale?width=96&format=png"
            alt="avatar"
            className="w-[50px]"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
