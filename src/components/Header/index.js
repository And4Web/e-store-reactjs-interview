import React from "react";
import "./header.scss";
import TopMenu from "../topMenu";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container-fluid ">

          <div className="row header_main align-items-center pb-2">

            <div className="col-xl-3 col-lg-2">
              <div className="header_logo pt-3 display-6">
                <h1>eStore</h1>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7">
              <div className="input-group mt-3">
                <div className="input-group-prepend">
                  <select
                    name=""
                    id=""
                    className="form-control btn btn-success dropdown-toggle"
                  >
                    <option value="">All</option>
                    <option value="">Men</option>
                    <option value="">Women</option>
                    <option value="">Kids</option>
                  </select>
                </div>

                <input type="text" className="form-control" />

                <div className="input-group-append">
                  <button className="btn btn-success">
                    <i className="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3">
              <div className="header_right pt-3">
                <div className="widgets">
                  <ul>
                    <li>
                      <i className="fa fa-heart"></i>
                    </li>
                    <li>
                      <i className="fa fa-shopping-cart"></i>
                    </li>
                  </ul>
                </div>

                <div className="auth">
                  <a href="#">Login</a>
                  <span style={{ color: "white" }}>/</span>
                  <a href="#">Register</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <TopMenu />
    </>
  );
}

export default Header;
