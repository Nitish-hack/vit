import React from "react";
import styled from "styled-components";
import { AccountBox } from "../components/authentication/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SignPage() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default SignPage;