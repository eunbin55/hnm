import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faBasketShopping,
  faClose,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authenticateActions } from "../redux/reducers/authenticateSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const menuList = ["Women", "Men", "Baby", "Kids", "Home", "Sale"];
  const authenticate = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
  const goToLoginPage = () => navigate("/login");
  const onLogout = () => dispatch(authenticateActions.logout());
  const onSearch = (e) => {
    const searchText = e.target.value;
    navigate(`/?q=${searchText}`);
  };
  return (
    <div>
      {sideMenuOpen && (
        <div className="side-menu">
          <FontAwesomeIcon
            className="icon-close"
            icon={faClose}
            onClick={() => setSideMenuOpen(false)}
          />
          <ul className="side-menu-list">
            {menuList.map((menu, index) => (
              <li key={index}>
                <a href="/">{menu}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="nav-top">
        <div
          className="menu-button"
          onClick={() => setSideMenuOpen(!sideMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="icon-menu" />
        </div>
        <div className="fn-button">
          {authenticate && <FontAwesomeIcon icon={faBasketShopping} />}
          <div
            className="login-button"
            onClick={() => (!authenticate ? goToLoginPage() : onLogout())}
          >
            <FontAwesomeIcon icon={faUser} />
            <div>{authenticate ? "로그아웃" : "로그인"}</div>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <Link to={"/"}>
          <img
            width={100}
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
          />
        </Link>
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="/">{menu}</a>
            </li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} className="icon-search" />
          <input
            type="text"
            placeholder="제품검색"
            onKeyDown={(e) => {
              if (e.code === "Enter" || e.key === "Enter") onSearch(e);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
