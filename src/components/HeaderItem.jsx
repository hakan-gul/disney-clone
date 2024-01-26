import React from "react";
import { IconContext } from "react-icons";

function HeaderItem({ Icon, name }) {
  return (
    <div className="text-gray-200 flex items-center gap-3 text-[15px] font font-semibold cursor-pointer hover:underline underline-offset-8 ">
      <div>
        <IconContext.Provider value={{ size: "1.3em" }}>
          <Icon />
        </IconContext.Provider>
      </div>

      <div>{name}</div>
    </div>
  );
}

export default HeaderItem;
