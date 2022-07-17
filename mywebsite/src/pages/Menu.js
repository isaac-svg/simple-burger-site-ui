import React from "react";
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";
import MenuItem from "../components/MenuItem";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      <div className="menuList">
        {MenuList.map((Item) => {
          const { name, image, price, id } = Item;

          return (
            <div className="menuItem">
              <MenuItem key={id} name={name} image={image} price={price} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
