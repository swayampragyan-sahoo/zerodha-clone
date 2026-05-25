import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import Dashboard from "./Dashboard";
import Topbar from "./Topbar";
import { BACKEND_URL, FRONTEND_URL } from "../constants";

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        window.location.href = `${FRONTEND_URL}/login`;
        return;
      }

      try {
        const { data } = await axios.post(
          BACKEND_URL,
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        setUsername(user);

        if (!status) {
          removeCookie("token");

          window.location.href = `${FRONTEND_URL}/login`;
        }
      } catch (error) {
        console.log(error);

        removeCookie("token");

        window.location.href = `${FRONTEND_URL}/login`;
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