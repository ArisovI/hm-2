import React, { useCallback, useContext } from "react";
import MyButton from "../../components/UI/button/MyButton";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Login.scss";
import { Context } from "../../context/Context";
const Login = () => {
  const value = useContext(Context);
  const handleClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/" className="back">
        <MdClose />
      </Link>
      <h1>Login</h1>
      <form onSubmit={handleClick}>
        <div>
          <span>Email</span>
          <input
            type="text"
            placeholder="Email..."
            value={value?.email}
            onChange={(e) => value?.setEmail(e.target.value)}
          />
        </div>
        <div>
          <span>Password</span>
          <input
            type="text"
            placeholder="Password..."
            value={value?.password}
            onChange={(e) => value?.setPassword(e.target.value)}
          />
        </div>
        <div className="submit">
          <MyButton >Reset</MyButton>
          <MyButton onClick={() => value?.checkLogin()}>Login</MyButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
/* const getInfo = () => {
  user = userValue;
  password = passwordValue;
  console.log(user);
  console.log(password);
};

useEffect(() =>{
  
})

useEffect(() => {
  const admin = {
    email: user,
    password: password,
  };
  const fetchAuth = async () => {
    try {
      const mod = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        admin
      );
      localStorage.setItem("user", mod.data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  fetchAuth();
}, [user, password]);

useEffect(() => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("user")}`,
  };
  const getUser = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        { headers }
      );
      setUserInfo(response.data);
      setUserActive(true);
    } catch (error) {
      console.log(error);
    }
  };
  getUser();
}, [user, password]); */
