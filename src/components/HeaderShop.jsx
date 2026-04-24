import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";
import products from "../data/products";

const HeaderShop = () => {
  const { cartItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  // 🔍 SEARCH
  const handleSearch = (value) => {
    setSearchTerm(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 5));
  };

  // 👉 SELECT
  const handleSelect = (product) => {
    setSearchTerm("");
    setSuggestions([]);

    navigate(
      product.type === "rental"
        ? `/product/${product.id}`
        : `/shop-index/product/${product.id}`
    );
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header_top">

          {/* LOGO */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          {/* TABS */}
          <div className="view_tabs">
            <NavLink to="/" className={({ isActive }) => isActive ? "rental active" : "rental"}>
              <span>Rental</span>
            </NavLink>
            <NavLink to="/shop-index" className={({ isActive }) => isActive ? "shop active" : "shop"}>
              <span>Shop</span>
            </NavLink>
          </div>

          {/* 🔥 SEARCH BAR */}
          <div className="search_bar">
            <input
              type="text"
              className="form-control"
              placeholder="What are you searching for?"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />

            <button className="btn btn-link">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            {/* 🔥 DROPDOWN */}
            {suggestions.length > 0 && (
              <div className="search_dropdown">
                {suggestions.map((item) => (
                  <div
                    key={item.id}
                    className="search_item"
                    onClick={() => handleSelect(item)}
                  >
                    <img src={item.image} alt="" />

                    <div className="search_info">
                      <span
                        className={`search_title ${item.type === "rental"
                          ? "text-rental"
                          : "text-shop"
                          }`}
                      >
                        {item.name}
                      </span><br></br>

                      <small className="text-muted">
                        £{item.price}
                        {item.type === "rental" && " /month"}
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="cta_btn">
            <div className="phone_no">
              <a className="btn btn-outline-secondary" href="tel:+18495172592">
                <i className="fa-solid fa-phone-volume"></i>
                <span> +1 849 517 2592</span>
              </a>
            </div>

            <div className="my_account">
              <button className="btn btn-primary">
                <i className="fa-solid fa-user"></i>
                <span> Account</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* SHOP NAV */}
      <div id="shop" className="main_content shop_view">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container d-flex align-items-center position-relative">

            {/* 🔥 TOGGLER */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarLightExample"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* 🔥 MENU */}
            <div className="collapse navbar-collapse" id="navbarLightExample">
              <ul className="navbar-nav gap-2">
                <li className="nav-item">
                  <NavLink to="/shop-index/monitor-shop" className="nav-link">
                    Monitors & Displays
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/shop-index/desktop-shop" className="nav-link">
                    Desktop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/shop-index/laptop-shop" className="nav-link">
                    Laptops
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/shop-index/servers-shop" className="nav-link">
                    Servers & Racks
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/shop-index/office-shop" className="nav-link">
                    Office Components
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* 🔥 CART (OUTSIDE COLLAPSE) */}
            <Link to="/cart" className="my_cart">
              <span className="mobile-cart-icon"><i className="fa-solid fa-cart-shopping"></i></span>
              <span className="my_cart_head">Your Cart</span>
              <span className="cart-count">{cartItems.length}</span>
            </Link>

          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderShop;