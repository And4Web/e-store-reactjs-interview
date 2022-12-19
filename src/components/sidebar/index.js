import React from "react";
import "./sidebar.scss";

function Sidebar() {
  return (
    <>
      <div className="sidebar_category">
        <div className="section-title">
          <h4>Categories</h4>
        </div>
        <div className="category_accordian">
          <div className="accordian">
            <div className="card">
              <div className="card-heading">
                <a href="#">women</a>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <a href="#">Shoes</a>
                  </li>
                  <li>
                    <a href="#">Jackets</a>
                  </li>
                  <li>
                    <a href="#">Skirts</a>
                  </li>
                  <li>
                    <a href="#">Hats</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
