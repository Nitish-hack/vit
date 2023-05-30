import React, { useContext ,useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { loginRoute } from "../../../utils/APIRoutes";
import {
  BottomText,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm({toast,toastOptions}) {
  const { switchToSignup } = useContext(AccountContext);
  const [values, setValues] = useState({ rollNumber: "", password: "" });
   const navigate=useNavigate();
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { rollNumber, password } = values;
    if (rollNumber.length!==10) {
      toast.error("Roll Number should be 10 digits long", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { rollNumber, password } = values;
      const response = await axios.post(loginRoute, {
        rollNumber,
        password,
      });
      if (!response.status) {
        const {data}=response;
        toast.error(data.error, toastOptions);
      }
     else {
      const {data}=response;
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

  return (
    <BoxContainer>
      <FormContainer action="" onSubmit={(event)=>handleSubmit(event)}>
        <Input type="number" placeholder="Roll Number" name="rollNumber" onChange={(e) => handleChange(e)} />
        <Input type="password" placeholder="Password" name="password" onChange={(e) => handleChange(e)}/>
      <SubmitButton type="submit">Signin</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1em" />
      <BottomText>Don't have and account? <span onClick={switchToSignup}>Signup</span></BottomText>
    </BoxContainer>
  );
}
