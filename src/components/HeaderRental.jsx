import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";
import products from "../data/products";

const HeaderRental = () => {
  const { cartItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarContent");

    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

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

          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="view_tabs">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "rental active" : "rental"
              }
            >
              <span>Rental</span>
            </NavLink>

            <NavLink
              to="/shop-index"
              className={({ isActive }) =>
                isActive ? "shop active" : "shop"
              }
            >
              <span>Shop</span>
            </NavLink>
          </div>

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
                        className={`search_title ${
                          item.type === "rental"
                            ? "text-rental"
                            : "text-shop"
                        }`}
                      >
                        {item.name}
                      </span>

                      <br />

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

          <div className="cta_btn">
            <div className="phone_no">
              <a
                className="btn btn-outline-secondary"
                href="tel:+18495172592"
              >
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

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex align-items-center position-relative">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarContent"
          >
            <ul className="navbar-nav gap-2">

              <li className="nav-item">
                <NavLink
                  to="/laptop"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  Laptop Rental
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/tablet"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  Tablet PC Rental
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/computer"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  Computer Rental
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/monitor"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  Monitor Rental
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/printer"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  Printer Rental
                </NavLink>
              </li>

            </ul>
          </div>

          <Link to="/cart" className="my_cart">
            <span className="mobile-cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>

            <span className="my_cart_head">
              Your Cart
            </span>

            <span className="cart-count">
              {cartItems.length}
            </span>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default HeaderRental;