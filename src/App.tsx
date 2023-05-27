import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductListPage from "./Pages/ProductListPage";
import ProductDetails from "./Pages/ProductDetails";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import { useState } from "react";
import CartPage from "./Pages/CartPage";
import LoginPage from "./Pages/LoginPage/LoginPage";

function App() {
  const savedDataString = localStorage.getItem("data") || "{}";
  const stringify = JSON.parse(savedDataString);

  const [ob, setOb] = useState<{}>(stringify);

  const handleCount = (productId: number, count: number) => {
    console.log("id", productId);
    const oldCount = ob[productId as keyof typeof ob] || 0;

    const cartOb = { ...ob, [productId]: oldCount + count };
    setOb(cartOb);
    const obStringy = JSON.stringify(cartOb);
    localStorage.setItem("data", obStringy);
    console.log("data", obStringy);
  };

  const totalCount = Object.keys(ob).reduce((pre: number, curr: any) => {
    return pre + ob[curr as keyof typeof ob];
  }, 0);

  console.log("ob", ob);

  return (
    <div className="">
      <Navbar mainCount={totalCount} />

      <Routes>
        <Route index element={<ProductListPage />} />
        <Route
          path="/products/:id"
          element={<ProductDetails handlCount={handleCount} />}
        />
        <Route path="/signuppage" element={<SignUpPage />}></Route>
        <Route path="/loginpage" element={<LoginPage />}></Route>

        <Route path="/cart" element={<CartPage ob={ob} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
