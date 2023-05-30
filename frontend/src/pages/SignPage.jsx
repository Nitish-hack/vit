import React, { useEffect } from "react";
import styled from "styled-components";
import { AccountBox } from "../components/authentication/accountBox/AccountBox";
import { useNavigate } from "react-router-dom";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SignPage() {
  const navigate=useNavigate();
  useEffect(() => {
   if(localStorage.getItem("user")){
    navigate("/");
   }
  }, []);
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default SignPage;