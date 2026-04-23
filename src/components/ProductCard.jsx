import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product, view }) {
  const isRental = product.type === "rental";

  const { addToCart, cartItems } = useContext(CartContext);

  const isAdded = cartItems.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();     // ✅ STOP LINK
    e.stopPropagation();    // ✅ STOP BUBBLE

    if (!isAdded) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
        duration: isRental ? "1 Month" : null,
        type: product.type // ✅ IMPORTANT
      });
    }
  };

  return (
    <div className={`product_block ${view === "list" ? "list_view" : ""}`}>
      
      <div className={`product_item ${isRental ? "rental_card" : "shop_card"}`}>

        <Link 
          to={
            isRental 
              ? `/product/${product.id}` 
              : `/shop-index/product/${product.id}`
          } 
          className="product_item_link"
        >

          {/* IMAGE */}
          <div className="product_img">
            <img src={product.image} alt={product.name} />
          </div>

          {/* INFO */}
          <div className="product_info">
            <h4 className="mt-2 title-heading fw-semibold">
              {product.name}
            </h4>
          </div>

          {/* ✅ CTA INSIDE CARD */}
          <div className="product_cta">

            {/* PRICE */}
            <div className="rent_price">
              <span className="price fs-5 fw-bold">
                £{product.price}
                {isRental && (
                  <span className="ms-1 small text-muted">/month</span>
                )}
              </span>
            </div>

            {/* BUTTON */}
            <div className="cart_btn mt-2">
              <button
                type="button"
                className={`btn w-100 ${
                  isAdded
                    ? "btn-success"
                    : isRental
                    ? "btn-rental"
                    : "btn-primary"
                }`}
                onClick={handleAddToCart}
              >
                {isAdded ? "Added" : "Add To Cart"}

                <i
                  className={`ms-2 ${
                    isAdded
                      ? "fa-solid fa-check"
                      : "fa-solid fa-arrow-right-long"
                  }`}
                ></i>
              </button>
            </div>

          </div>

        </Link>

      </div>
    </div>
  );
}

export default ProductCard;