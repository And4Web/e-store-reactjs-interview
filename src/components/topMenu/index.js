import React from "react";
import './topMenu.scss'

function TopMenu() {
  const menuItems = [
    "Laptops",
    "Smartphones",
    "Smartwatches",
    "Gaming",
    "Speakers",
    "Tablets",
    "Music",
    "Smarthome",
  ];
  return (
    <>
      <header className="menu_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-xl-12">
              <nav>
                <ul className="menu">
                  {menuItems.map((item, index) => {
                    return (
                      <li key={index} className="menu_item">
                        <a href="#">{item}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default TopMenu;
