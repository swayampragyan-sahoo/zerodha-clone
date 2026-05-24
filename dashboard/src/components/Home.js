import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Dashboard from "./Dashboard";
import Topbar from "./Topbar";

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = "http://localhost:3000/login";
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3002",
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        setUsername(user);

        if (!status) {
          removeCookie("token");

          window.location.href = "http://localhost:3000/login";
        }
      } catch (error) {
        console.log(error);

        removeCookie("token");

        window.location.href = "http://localhost:3000/login";
      }
    };

    verifyCookie();
  }, [cookies, removeCookie]);

  return (
    <>
      <Topbar username={username} />
      <Dashboard />
    </>
  );
};

export default Home;