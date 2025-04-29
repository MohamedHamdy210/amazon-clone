import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import amazonLogo from "../assets/amazon-logo.png";
import { useAppDispatch } from "../features/hooks";
interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignInFormElement extends HTMLFormElement {
  elements: FormElements;
}
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const login = async (
    email: FormDataEntryValue,
    password: FormDataEntryValue
  ) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email as string,
        password as string
      );

      const user = userCredential.user;

      dispatch({ type: "user/LOGIN", payload: user.email });
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    }
  };
  const handleSubmit = (event: React.FormEvent<SignInFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");
    if (email && password) {
      login(email, password);
    } else {
      alert("Email and password are required.");
    }
  };
  return (
    <div className="log">
      <img src={amazonLogo} alt="" />
      <div className="log-container">
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input name="email" type="text" />
          <h5>Password</h5>
          <input name="password" type="password" />
          <button>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          className="sign-up"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
