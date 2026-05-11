import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const AddToCart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const totalCost = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const shipping = cartItems.length > 0 ? 4.9 : 0;

    const deposit = cartItems.reduce((total, item) => {
        if (item.type === "rental") {
            return total + 17 * item.quantity;
        }
        return total;
    }, 0);

    const total = totalCost + shipping + deposit;

    const isCartEmpty = cartItems.length === 0;

    return (
        <div className="container py-4">
            <div className="cart-block">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card mb-3">
                            <div className="card-header bg-white">
                                <h4 className="fw-bold my-2">Cart</h4>
                            </div>
                            <div className="card-body p-3">
                                {isCartEmpty ? (
                                    <p>Your cart is empty</p>
                                ) : (
                                    cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="d-flex align-items-center border-bottom py-3 cart-product"
                                        >

                                            <Link
                                                to={
                                                    item.type === "rental"
                                                        ? `/product/${item.id}`
                                                        : `/shop-index/product/${item.id}`
                                                }
                                                className="d-flex align-items-center text-decoration-none text-dark product-title"
                                                style={{ flex: 1 }}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    style={{
                                                        width: "100px",
                                                        height: "80px",
                                                        objectFit: "contain"
                                                    }}
                                                />

                                                <div className="mx-3">
                                                    <h6 className="fw-semibold">{item.name}</h6>

                                                    {item.type === "rental" && item.duration && (
                                                        <div className="small text-muted">
                                                            Rental Tenure: {item.duration}
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>


                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    updateQuantity(item.id, Number(e.target.value))
                                                }
                                                style={{ width: "70px" }}
                                                className="form-control me-3"
                                            />

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
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-header bg-white">
                                <h5 className="fw-semibold my-2">Order Summary</h5>                           
                            </div>
                            <div className="card-body p-3">
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
                                            Refundable Deposit
                                            <small className="text-muted d-block">
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

                                {isCartEmpty ? (
                                    <button className="btn btn-secondary w-100" disabled>
                                        Cart is Empty
                                    </button>
                                ) : (
                                    <Link to="/checkout" className="btn btn-rental w-100">
                                        Continue to checkout →
                                    </Link>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;