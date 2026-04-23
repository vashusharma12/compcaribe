import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // ✅ TOTAL (ALL PRODUCTS)
  const totalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length > 0 ? 4.9 : 0;

  // ✅ ONLY RENTAL DEPOSIT
  const deposit = cartItems.reduce((total, item) => {
    if (item.type === "rental") {
      return total + 17 * item.quantity;
    }
    return total;
  }, 0);

  const total = totalCost + shipping + deposit;

  return (
    <div className="container py-4">
      <div className="row">

        {/* LEFT */}
        <div className="col-lg-8">
          <div className="card p-3 mb-3">
            <h4 className="fw-bold mb-3">Cart</h4>

            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex align-items-center border-bottom py-3"
                >

                  <img
                    src={item.image}
                    alt=""
                    style={{ width: "100px", height: "80px", objectFit: "contain" }}
                  />

                  <div className="ms-3 flex-grow-1">
                    <h6 className="fw-semibold">{item.name}</h6>

                    {/* RENTAL ONLY */}
                    {item.type === "rental" && item.duration && (
                      <div className="small text-muted">
                        Rental Tenure: {item.duration}
                      </div>
                    )}

                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                      style={{ width: "70px" }}
                      className="form-control mt-2"
                    />
                  </div>

                  <div className="text-end">
                    <h5 className="fw-bold">
                      £{item.price * item.quantity}
                    </h5>

                    {item.type === "rental" && (
                      <small className="text-muted">per month</small>
                    )}

                    <div>
                      <button
                        className="btn btn-sm text-danger border"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-lg-4">
          <div className="card p-3">

            <h5 className="fw-semibold mb-3">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Total Cost</span>
              <span>£{totalCost.toFixed(2)}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Shipping</span>
              <span>£{shipping.toFixed(2)}</span>
            </div>

            {deposit > 0 && (
              <div className="d-flex justify-content-between mb-2">
                <span>
                  Refundable Deposit{" "}
                  <small className="text-muted"><br></br>
                    (charged for each rental product)
                  </small>
                </span>
                <span>£{deposit.toFixed(2)}</span>
              </div>
            )}

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total incl. VAT</span>
              <span>£{total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="btn btn-rental w-100">
              Continue to checkout →
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AddToCart;