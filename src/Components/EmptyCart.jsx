import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const EmptyCart = () => {
  return (
    <>
      <RiShoppingCartLine style={{ fontSize: "8rem" }} />
      <h5 className="text-center">هیچ آیتمی در سبد خرید موجود نیست</h5>
    </>
  );
};

export default EmptyCart;
