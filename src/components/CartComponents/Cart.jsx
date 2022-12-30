import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart, delFromCart, clearCart } from "../../Redux/actions";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { products, cart } = state;

  return (
    <div>
      <h3>Carrito</h3>
      <div className="carrito__container">
        <h4>Productos</h4>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={() => dispatch(AddToCart(product.id))}
          />
        ))}
        <button onClick={() => dispatch(clearCart())}>Limpiar carrito</button>
        <button onClick={() => dispatch(delFromCart())}>Limpiar carrito</button>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delOneFromFCart={() => dispatch(delFromCart(item.id))}
            delAllFromCart={() => dispatch(delFromCart(item.id, true))}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
