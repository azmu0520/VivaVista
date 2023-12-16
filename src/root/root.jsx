import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { data } from "../utilities/navbar";
import Products from "../components/Products";
import Product from "../components/Products/Product";
import Register from "../components/Register";
import Login from "../components/Login";
import Generic from "../components/Generic";
import RequireAuth from "./privateRoute";
import Account from "../components/Account";

const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route path="account" element={<Account />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path="review" element={<Generic />} />
        </Route>
      </Route>
      <Route path={"*"} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
