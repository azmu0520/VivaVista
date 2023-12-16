import { NavLink, useNavigate } from "react-router-dom";
import {
  Container,
  Controllers,
  Description,
  Header,
  InputWrap,
  Wrap,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/slices/auth";
import { useState } from "react";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export default function Login() {
  const { request } = useRequest();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    password: "",
    email: "",
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    request({
      url: "user/login",
      body: formData,
      method: "POST",
      includeToken: false,
    })
      .then((res) => {
        if (res?.status) {
          message.success("Successfully LoggedIn!");
          dispatch(register(res?.data?.token));
          navigate("/");
        } else {
          message.error(res?.data);
        }
        setFormData({});
      })
      .catch((error) => {
        console.log(error, "pp");
      });
  };
  return (
    <Container>
      <Wrap onSubmit={handleSubmit}>
        <Header>Registered Customers</Header>
        <Description>
          If you have an account, sign in with your email address.
        </Description>
        <InputWrap>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </InputWrap>
        <InputWrap>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </InputWrap>
        <Controllers>
          <input type="submit" value={"Sigh In"} />
          <span>
            <NavLink to="/">Forgot Your Password?</NavLink>
          </span>
        </Controllers>

        <Header className="top">New Customer ?</Header>
        <Description>
          Creating an account has many benefits: check out faster, keep more
          than one address, track orders and more.
        </Description>
        <Controllers>
          <div>
            <NavLink to="/register">Create An Account</NavLink>
          </div>
        </Controllers>
      </Wrap>
    </Container>
  );
}
