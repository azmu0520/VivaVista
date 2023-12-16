import { useEffect, useState } from "react";
import {
  Container,
  Controllers,
  Header,
  InputWrap,
  Wrap,
} from "../Login/style";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/auth";
import { useSelector } from "react-redux";

export default function Register() {
  const state = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const { request } = useRequest();
  const dispatch = useDispatch();
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
      url: "user/register",
      body: formData,
      method: "POST",
      includeToken: false,
    })
      .then((res) => {
        if (res?.status) {
          message.success("Successfully Registered!");
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
        <Header>Create New Customer Account</Header>
        <InputWrap>
          <label htmlFor="first_name">First Name</label>
          <input
            required
            type="text"
            name="first_name"
            id="first_name"
            onChange={handleChange}
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="last_name">Last Name</label>
          <input
            required
            type="text"
            name="last_name"
            id="last_name"
            onChange={handleChange}
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
          />
        </InputWrap>
        <InputWrap>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </InputWrap>
        <Controllers>
          <input type="submit" value={"Create An Account"} />
        </Controllers>
      </Wrap>
    </Container>
  );
}
