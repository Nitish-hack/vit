import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { verifyRoute } from '../utils/APIRoutes';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(!user || user.length===0) {
    navigate("/");
    }
     const token=JSON.parse(user);

    const verifyToken = async () => {
      try {
        const response = await axios.post(verifyRoute, { token });

        if (!response.status) {
          navigate('/');
         
        }
        else{
          console.log(response);
        }

        // Token is valid, do nothing
      } catch (error) {
        console.log("error fucked u up")
        console.log(error);
      }
    };

    if (token) {
      verifyToken();
    } else {
      // Token is not present, navigate to home page
      navigate('/');
    }
  }, []);

  return <div>Dashboard</div>;
};

export default Dashboard;
