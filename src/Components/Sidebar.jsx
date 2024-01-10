import React from "react";
import { useCartContext } from "../context/CartContext";
import EmptyCart from "./EmptyCart";

const Sidebar = () => {
  const { cart, clearCart ,total} = useCartContext();

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="col-lg-4 col-md-5 pt-3 pt-sm-4 border-end">
      <div className="text-center mb-4 pb-3 border-bottom">
        <h3 className="h5 mb-3 pb-1">جمع کل</h3>
        <h4 className="fw-normal">{total.toLocaleString()} تومان </h4>
      </div>
      <a
        onClick={clearCart}
        className="btn btn-primary btn-shadow d-block w-100 mt-4"
      >
        حذف همه آیتم ها
      </a>
    </div>
  );
};

export default Sidebar;
