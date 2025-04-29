import logo from "../assets/logo.svg"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import {useAppSelector , useAppDispatch } from "../features/hooks";
export default function Header(){
    const cartItems = useAppSelector((state) => state.cart.cartItems);
    const user = useAppSelector((state) => state.user.email);
    const dispatch = useAppDispatch()
    const navigate=useNavigate()
    const handleSignIn = () => {
        if (user) {
            // Sign out logic here
            if(confirm("Are you sure you want to sign out?")) {

              dispatch({ type: "user/LOGOUT" });  
            }
        } else {
            navigate("/login")
        }
    };
  return (
      <>
        <header>
          <nav className="navbar">
            <img className="p" src={logo} alt="amazon" onClick={()=>{
              navigate("/")
            }} />
            <div className="search-bar">
              <input type="text" />

              <button >
                <SearchIcon />
              </button>
            </div>
            <div onClick={()=>{
              handleSignIn()
            }} className="nav-button p user">
              <span>{user? user: ""}</span>
              <h4>{user?"Sign Out":"Sign In"}</h4>
            </div>
            <div className="nav-button p">
              <span>Returns</span>
              <h4>&Orders</h4>
            </div>
            <div className="nav-button p">
              <span>Your</span>
              <h4>Prime</h4>
            </div>
            <div onClick={()=>{
              navigate("/cart")
            }} className="cart nav-button p">
              <ShoppingCartIcon />
              <span>{cartItems.length}</span>
            </div>
          </nav>
        </header>
      </>
    );
}