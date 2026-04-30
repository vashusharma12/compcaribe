import { Link, useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedDuration, setSelectedDuration] = useState("1 Month");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  const durationMultiplier = {
    "1 Month": 1,
    "2 Months": 0.9,
    "3 Months": 0.8,
    "6 Months": 0.65,
  };

  const basePrice = product.price;

  const finalPricePerMonth = Math.round(
    basePrice * durationMultiplier[selectedDuration]
  );

  const safeQuantity = quantity < 1 ? 1 : quantity;

  const totalPrice = finalPricePerMonth * safeQuantity;

  return (
    <div className="product_details container py-5">
      <div className="row">

        {/* LEFT */}
        <div className="col-md-6">
          <div className="large_image mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid"
            />
          </div>

          <div className="d-flex gap-2">
            {[1, 2, 3, 4].map((img, i) => (
              <img
                key={i}
                src={product.image}
                alt=""
                style={{
                  width: "60px",
                  cursor: "pointer",
                  border: "1px solid #ddd",
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-md-6">

          <h6 className="text-muted">
            {product.brand || "Brand Name"}
          </h6>

          <h4>{product.name}</h4>

          <div className="rating mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`fa fa-star ${
                  i < product.rating ? "checked" : ""
                }`}
              ></span>
            ))}
            <span className="ms-2">({product.reviews})</span>
          </div>

          <div className="text-success mb-2">✔ In Stock</div>

          <ul className="small text-muted">
            <li>High quality performance</li>
            <li>Fast delivery available</li>
            <li>Secure payment</li>
            <li>Verified product</li>
          </ul>

          {/* RENTAL PRODUCT */}
          {product.type === "rental" ? (
            <div className="rent_box border p-3 rounded">

              <h6>Select Duration</h6>

              <div className="duration_block">
                {["6 Months", "3 Months", "2 Months", "1 Month"].map((d) => (
                  <div
                    key={d}
                    className={`p-2 border mb-2 ${
                      selectedDuration === d
                        ? "bg-rental text-white"
                        : ""
                    }`}
                    style={{
                      cursor: "pointer",
                      borderRadius: "5px",
                    }}
                    onClick={() => setSelectedDuration(d)}
                  >
                    {d}
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <label>Quantity</label>

                <input
                  type="number"
                  min="1"
                  className="form-control"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Number(e.target.value))
                  }
                />
              </div>

              <h4 className="mt-3">
                £{totalPrice}

                <span className="fs-6">
                  ({finalPricePerMonth} × {safeQuantity}) / Month
                </span>
              </h4>

              {selectedDuration !== "1 Month" && (
                <div className="text-success small">
                  You save{" "}
                  {Math.round(
                    basePrice - finalPricePerMonth
                  )}{" "}
                  per item
                </div>
              )}

              <div className="text-muted small mb-2">
                🚚 Delivery within 24 hours
              </div>

              <button
                className="btn btn-rental w-100"
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: finalPricePerMonth,
                    image: product.image,
                    quantity: safeQuantity,
                    duration: selectedDuration,
                    type: product.type, // 
                  });

                  navigate("/cart");
                }}
              >
                Add To Cart →
              </button>
            </div>
          ) : (
            /* SHOP PRODUCT */
            <div className="shop_box border p-3 rounded">

              <h3>£{product.price}</h3>

              {product.oldPrice && (
                <div className="text-muted text-decoration-line-through">
                  £{product.oldPrice}
                </div>
              )}

              <button
                className="btn btn-primary w-100 mt-3"
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                    duration: null,
                    type: product.type,
                  });

                  navigate("/shop-index/cart");
                }}
              >
                Add To Cart →
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;