import amazonLogo from "../assets/amazon-logo.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useAppDispatch } from "../features/hooks";
interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignUpFormElement extends HTMLFormElement {
  elements: FormElements;
}

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const regiester = async (
    email: FormDataEntryValue,
    password: FormDataEntryValue
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
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

  const handleSubmit = (event: React.FormEvent<SignUpFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const email = formData.get("email");
    const password = formData.get("password");
    if (email && password) {
      regiester(email, password);
    } else {
      alert("Email and password are required.");
    }
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
