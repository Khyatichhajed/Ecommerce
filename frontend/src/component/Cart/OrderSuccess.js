import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderSuccess = () => {
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
      const shippingCharges = subtotal > 1000 ? 0 : 200;

      const tax = subtotal * 0.18;
    
      const totalPrice = subtotal + tax + shippingCharges;
    
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully
      </Typography>
      <span className="payment"> Pay ₹{totalPrice} at time of delivery</span>
      <Link to="/products">Continue Shopping</Link>
    </div>
  );
};

export default OrderSuccess;