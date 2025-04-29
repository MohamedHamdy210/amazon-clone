import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { store } from "./features/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SelectionPage from "./components/SelectionPage";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/computers & accessories"
            element={<SelectionPage category="computers & accessories" />}
          />
          <Route
            path="/holiday deals"
            element={<SelectionPage category="holiday deals" />}
          />
          <Route
            path="/gaming accessories"
            element={<SelectionPage category="gaming accessories" />}
          />
          <Route
            path="/home gadgets"
            element={<SelectionPage category="home gadgets" />}
          />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
