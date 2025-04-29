import { FC, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
  export  interface ProductsProps {
    id: number;
    title: string;
    image: string;
    price: number;
    rate : number;
    category: string;
    amount?: number;
    }

const Product: FC<ProductsProps> = (props) => {
    const [amount, setAmount] = useState(0);
    const dispatch = useDispatch();
    const sub=()=>{
       if (amount>0) setAmount(prev=>prev-1);
    }
    const add=()=>{
        setAmount(prev=>prev+1);
    }
    const stars=()=>{
        const st=[];
        for(let i=0; i<props.rate ; i++){
           st.push(<StarIcon sx={{
            color:"gold"
           }} />)         
        }
        return <div className="stars">{st}</div>
    };
    const addToCart=()=>{
        if (amount>0) {
            dispatch({
                type: "cart/addToCart",
                payload: {
                    id: props.id,
                    amount: amount
                }
            });
        } else {
           alert("Please add an amount greater than 0");
        }
    }
    return (
      <>
        <div className="card">
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <img src={props.image} alt={props.title} />
          <div className="rate">
            {stars()}
            <h4>{props.price} $ </h4>
          </div>
          <div className="add-to-cart">
            <div className="amount ">
              <RemoveIcon onClick={sub} className="p" />
              <input
                type="number"
                min={"0"}
                value={amount}
                disabled
                name="amount"
              />
              <AddIcon onClick={add} className="p" />
            </div>
            <button
              onClick={() => {
                addToCart();
                setAmount(0);
              }}
            >
              {" "}
              Add To Cart <ShoppingCartIcon />{" "}
            </button>
          </div>
        </div>
      </>
    );
};
export default Product
