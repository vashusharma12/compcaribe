import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutEnd = () => {
    const { cartItems } = useContext(CartContext);

    const [paymentMethod, setPaymentMethod] = useState("card");
    const [coupon, setCoupon] = useState("");

    const [discount, setDiscount] = useState(0);
    const [couponMessage, setCouponMessage] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        landmark: "",
        instructions: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // 🧮 CALCULATIONS
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const deposit = cartItems
        .filter((item) => item.type === "rental")
        .reduce((acc, item) => acc + 50 * item.quantity, 0);

    const total = subtotal + deposit - discount;

    // 🔄 HANDLE CHANGE
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });

        setErrors((prev) => ({
            ...prev,
            [name]: validateField(name, value),
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
    };

    // 🎟 APPLY COUPON
    const handleApplyCoupon = () => {
        if (coupon.trim().toUpperCase() === "FLAT10") {
            const discountValue = subtotal * 0.1;
            setDiscount(discountValue);
            setCouponMessage("Coupon applied! 10% discount added ✅");
        } else {
            setDiscount(0);
            setCouponMessage("Invalid coupon ❌");
        }
    };

    // ✅ FIELD VALIDATION
    const validateField = (name, value) => {
        switch (name) {
            case "firstName":
                return !value ? "First name is required" : "";
            case "lastName":
                return !value ? "Last name is required" : "";
            case "email":
                if (!value) return "Email is required";
                if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email";
                return "";
            case "phone":
                if (!value) return "Phone is required";
                if (value.length < 10) return "Invalid phone";
                return "";
            case "city":
                return !value ? "City is required" : "";
            case "state":
                return !value ? "State is required" : "";
            case "country":
                return !value ? "Country is required" : "";
            case "postalCode":
                return !value ? "Postal code is required" : "";
            default:
                return "";
        }
    };

    const validateForm = () => {
        let newErrors = {};

        Object.keys(formData).forEach((key) => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        setErrors(newErrors);
        return newErrors;
    };

    // 🚀 SUBMIT
    const handleSubmit = () => {
        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            const firstErrorField = Object.keys(newErrors)[0];
            const el = document.querySelector(`[name="${firstErrorField}"]`);

            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                el.focus();
            }
            return;
        }

        alert("Order Placed Successfully ✅");
    };

    const isFormValid =
        Object.values(errors).every((e) => !e) &&
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.phone &&
        formData.city &&
        formData.state &&
        formData.country &&
        formData.postalCode;

    return (
        <div className="container my-5">
            <div className="row">

                {/* LEFT */}
                <div className="col-md-7">
                    <h4 className="mb-3 fw-bold">Billing Details</h4>

                    <div className="card p-4 shadow-sm">

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input name="firstName"
                                    className={`form-control ${touched.firstName && errors.firstName ? "is-invalid" : ""}`}
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="invalid-feedback">{errors.firstName}</div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <input name="lastName"
                                    className={`form-control ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="invalid-feedback">{errors.lastName}</div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <input name="email"
                                className={`form-control ${touched.email && errors.email ? "is-invalid" : ""}`}
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className="invalid-feedback">{errors.email}</div>
                        </div>

                        <div className="mb-3">
                            <input name="phone"
                                className={`form-control ${touched.phone && errors.phone ? "is-invalid" : ""}`}
                                placeholder="Phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className="invalid-feedback">{errors.phone}</div>
                        </div>

                        <div className="mb-3">
                            <input name="address1" className="form-control" placeholder="Address Line 1" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <input name="address2" className="form-control" placeholder="Address Line 2" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <input name="landmark" className="form-control" placeholder="Landmark" onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <textarea name="instructions" className="form-control" placeholder="Delivery Instructions" onChange={handleChange}></textarea>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input name="city"
                                    className={`form-control ${touched.city && errors.city ? "is-invalid" : ""}`}
                                    placeholder="City"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="invalid-feedback">{errors.city}</div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <input name="state"
                                    className={`form-control ${touched.state && errors.state ? "is-invalid" : ""}`}
                                    placeholder="State"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="invalid-feedback">{errors.state}</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input name="country"
                                    className={`form-control ${touched.country && errors.country ? "is-invalid" : ""}`}
                                    placeholder="Country"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="invalid-feedback">{errors.country}</div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <input name="postalCode"
                                    className={`form-control ${touched.postalCode && errors.postalCode ? "is-invalid" : ""}`}
                                    placeholder="Postal Code"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className="invalid-feedback">{errors.postalCode}</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="col-md-5">

                    {/* SUMMARY */}
                    <div className="card p-4 shadow-sm mb-3">
                        <h5 className="mb-3 fw-semibold">Order Summary</h5>

                        {cartItems.map((item) => (
                            <div key={item.id} className="d-flex align-items-start gap-2 justify-content-between mb-3">

                                {/* 🖼 LEFT: PRODUCT IMAGE */}
                                <div className="d-flex align-items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: "60px",
                                            height: "60px",
                                            objectFit: "cover",
                                            borderRadius: "8px",
                                            border: "1px solid #eee"
                                        }}
                                    />

                                    {/* 📦 NAME + QTY */}
                                    <div>
                                        <div className="fw-semibold">{item.name}</div>
                                        <small className="text-muted">
                                            Qty: {item.quantity}
                                        </small>

                                        {/* 🔹 OPTIONAL TYPE LABEL */}
                                        <div>
                                            <small className={item.type === "rental" ? "text-rental" : "text-shop"}>
                                                Type: {item.type === "rental" ? "Rental" : "Shop"}
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                {/* 💰 PRICE */}
                                <div className="fw-semibold">
                                    £{item.price * item.quantity}
                                </div>

                            </div>
                        ))}
                        <hr />

                        <div className="d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>£{subtotal}</span>
                        </div>

                        {discount > 0 && (
                            <div className="d-flex justify-content-between text-success">
                                <span>Discount (FLAT10)</span>
                                <span>-£{discount.toFixed(2)}</span>
                            </div>
                        )}

                        {deposit > 0 && (
                            <div className="d-flex justify-content-between text-primary">
                                <span>Refundable Deposit</span>
                                <span>£{deposit}</span>
                            </div>
                        )}

                        <hr />

                        <div className="d-flex justify-content-between fw-bold">
                            <span>Total</span>
                            <span>£{total.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* 🎟 COUPON */}
                    <div className="card p-4 shadow-sm mb-3">
                        <h6 className="fw-semibold">Apply Coupon</h6>

                        <div className="d-flex gap-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter coupon"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                            />
                            <button
                                className="btn btn-outline-primary"
                                onClick={handleApplyCoupon}
                            >
                                Apply
                            </button>
                        </div>

                        {couponMessage && (
                            <small className={discount > 0 ? "text-success" : "text-danger"}>
                                {couponMessage}
                            </small>
                        )}
                    </div>

                    {/* PAYMENT */}
                    <div className="card p-4 shadow-sm">
                        <h6 className="mb-3 fw-semibold">Payment Method</h6>

                        <div className="form-check">
                            <input type="radio" checked={paymentMethod === "card"} onChange={() => setPaymentMethod("card")} />
                            <label className="ms-2">Card</label>
                        </div>

                        <div className="form-check">
                            <input type="radio" checked={paymentMethod === "upi"} onChange={() => setPaymentMethod("upi")} />
                            <label className="ms-2">UPI</label>
                        </div>

                        <div className="form-check">
                            <input type="radio" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                            <label className="ms-2">COD</label>
                        </div>

                        <button
                            className="btn btn-primary w-100 mt-3"
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                        >
                            Place Order
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutEnd;