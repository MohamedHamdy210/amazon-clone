import amazonLogo from "../assets/amazon-logo.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAppDispatch, } from "../features/hooks";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const regiester = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // ✅ Redirect to Home page
      dispatch({ type: "user/LOGIN", payload: user.email });
      navigate("/");

      // ✅ Optionally show success message
      // toast.success("Account created successfully!");
    } catch (error) {
      alert(error.message);
      // ✅ Optionally show error toast
      // toast.error(error.message);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");
    regiester(email, password);
  };
  return (
    <div className="log">
      <img src={amazonLogo} alt="" />
      <div className="log-container">
        <h1>Sign-Up</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input name="email" type="text" />
          <h5>Password</h5>
          <input name="password" type="password" />
          <button>Sign Up</button>
        </form>
        <p>
          By signing-up you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        
      </div>
    </div>
  );

  }
