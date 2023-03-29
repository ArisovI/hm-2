import React from "react";
// import axios from "axios";
const User = () => {
  const [userActive, setUserActive] = React.useState(false);
  // React.useEffect(() => {
  //   const admin = {
  //     email: "john@mail.com",
  //     password: "changeme",
  //   };
  //   const user = axios
  //     .post("https://api.escuelajs.co/api/v1/auth/login", {
  //       email: "john@mail.com",
  //       password: "changeme",
  //     })
  //     .then((res) => {
  //       // дальше, если запрос не равен null то сохраняем токен в локал и userActive=true,
  //       // в ином случае ...ошибка
  //       console.log(res);
  //       localStorage.setItem("user", res.data.access_token);
  //     });
  // }, []);
  // React.useEffect(() => {
  //   axios
  //     .get("https://api.escuelajs.co/api/v1/auth/profile", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("user")}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }, []);
  return <>user</>;
};

export default User;
