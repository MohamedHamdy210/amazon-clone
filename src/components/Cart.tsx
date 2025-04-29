import products from "../items";
import { useAppSelector } from "../features/hooks";
import CartElement from "./CartElement";
import banner from "../assets/banner.png";
export default function Cart() {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  let total = 0;
  const cartElements = cartItems.map((item) => {
    const product = products.find((prod) => prod.id === item.id);

    if (product) {
      total += product.price * item.amount;
      return <CartElement key={item.id} amount={item.amount} {...product} />;
    }
  });
  return (
    <>
      <div className="cart-page">
        <div className="cart">
          <img src={banner} className="banner" />
          <h4>Hello, mohamedhamdy210@gmail.com</h4>
          <h3>Shopping Cart</h3>
          <hr />
          {cartElements}
        </div>
        <div className="checkout">
          <p>
            Subtotal ({cartElements.length} items):{" "}
            <span>{total.toFixed(2)}$</span>
          </p>
          <div className="checkout-gift">
            <input type="checkbox" name="gift" id="" />
            This order contains a gift
          </div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
}
