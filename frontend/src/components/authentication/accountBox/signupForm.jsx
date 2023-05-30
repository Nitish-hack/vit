import React, { useContext ,useState } from "react";
import axios from "axios";

import { signupRoute } from "../../../utils/APIRoutes";
import {
  BoxContainer,
  FormContainer,
  Input,
  BottomText,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm({toast,toastOptions}) {

  const { switchToSignin } = useContext(AccountContext);
 
  const [values, setValues] = useState({
    name: "",
    rollNumber:"",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmpassword, name, email ,rollNumber} = values;
    if (name.length < 3) {
      toast.error(
        "name should be greater than 3 characters.",
        toastOptions
      );
      return false;
    }  else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    else if(rollNumber.length!==10){
      toast.error("Roll Number shoud be 10 digits.", toastOptions);
      return false;
    }
    else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    }else if (password !== confirmpassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    }
    

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, name, password ,rollNumber} = values;
      const response = await axios.post(signupRoute, {
        name,
        email,
        rollNumber,
        password,
      });

      if (!response.status) {
        const {data}=response;
        toast.error(data.error, toastOptions);
      }
      else {  
        const {data}=response;
        toast.success(data.message, toastOptions);
        switchToSignin();
      }
    }
  };

  return (
    <>
    <BoxContainer>
      <FormContainer action="" onSubmit={(event)=>handleSubmit(event)}>
        <Input type="text" placeholder="Full Name" name="name" onChange={(e)=>handleChange(e)}/>
        <Input type="email" placeholder="Email" name="email" onChange={(e)=>handleChange(e)} />
        <Input type="number" placeholder="Roll Number" name="rollNumber" onChange={(e)=>handleChange(e)}/>
        <Input type="password" placeholder="Password" name="password" onChange={(e)=>handleChange(e)}/>
        <Input type="password" placeholder="Confirm Password" name="confirmpassword" onChange={(e)=>handleChange(e)}/>
      <SubmitButton type="submit">Signup</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1em" />
      <BottomText>Already have and account? <span onClick={switchToSignin}>Signin</span></BottomText>
     
    </BoxContainer>
</>
  );
}
