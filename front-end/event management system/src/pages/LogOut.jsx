import React, { useEffect } from "react";
import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

function LogOutPage() {
  const navigate = useNavigate();
  const { logOutUser } = useAuth();

  useEffect(() => {
    logOutUser();
    navigate("/login");
  }, []);

  return <></>;
}

export default LogOutPage;
