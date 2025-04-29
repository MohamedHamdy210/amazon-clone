import { FC } from "react";
import { useAppDispatch } from "../features/hooks";
import { ProductsProps } from "./Product";
import RemoveIcon from "@mui/icons-material/Remove";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";

const CartElement: FC<ProductsProps> = (props) => {
  //   const [cartAmount, setCartAmount] = useState(props.amount);
  //   const cart = useSelector((state: any) => state.cart);
  const dispatch = useAppDispatch();
  function add() {
    // setCartAmount((prev) => prev + 1);
    dispatch({
      type: "cart/incrementAmount",
      payload: {
        id: props.id,
      },
    });
  }
  function sub() {
    dispatch({
      type: "cart/decrementAmount",
      payload: {
        id: props.id,
      },
    });
  }
  function del() {
    dispatch({
      type: "cart/removeItem",
      payload: {
        id: props.id,
      },
    });
  }
  const stars = () => {
    const st = [];
    for (let i = 0; i < props.rate; i++) {
      st.push(
        <StarIcon
          sx={{
            color: "gold",
          }}
        />
      );
    }
    return <div className="stars">{st}</div>;
  };
  return (
    <>
      <div className="cart-element">
        <div className="cart-info">
          <img src={props.image} alt={props.title} />
          <div className="element-info">
            <div className="title">
              <h3>{props.title}</h3>
              <h4>{props.price} $ </h4>
              <div className="rate">{stars()}</div>
            </div>
            <div className="add-to-cart">
              <div className="amount">
                <RemoveIcon className="p" onClick={sub} />
                <input
                  type="number"
                  min={"0"}
                  value={props.amount}
                  disabled
                  name="amount"
                />
                <AddIcon className="p" onClick={add} />
              </div>
            </div>
          </div>
        </div>
        <div className="total">
          <h4>Total: {((props.amount || 0) * props.price).toFixed(2)}$</h4>
          <button className="remove" onClick={del}>
            Remove from cart
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};
export default CartElement;
