import React from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Selling() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt-token");
    try {
      jwt_decode(token);
    } catch (err) {
      Cookies.remove("jwt-token");
      navigate("/login");
    }
  });
  return <div>Selling</div>;
}

export default Selling;
