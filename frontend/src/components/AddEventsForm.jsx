import React, { useState } from "react";
import styled from "styled-components";
import {addEventRoute} from "../utils/APIRoutes"
import axios from "axios";
import {AiFillCloseCircle} from "react-icons/ai"
import {MdAddCircle} from "react-icons/md"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddEventsForm = () => {
  const [FormValues, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    organizer: "",
    description: "",
    date: "",
    image: null ,
    technologies: [], // Initialize as an empty array
    newTechnology: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  const handleChange = (event) => {
    if (event.target.name === "image") {
      setFormData({
        ...FormValues,
        [event.target.name]: event.target.files[0], // Store the file object in the state
      });
    } else {
      setFormData({ ...FormValues, [event.target.name]: event.target.value });
    }
  };

  const handleAddTechnology = () => {
    const { newTechnology } = FormValues;
    if (newTechnology.trim() !== "") {
      setFormData({
        ...FormValues,
        technologies: [...FormValues.technologies, newTechnology],
        newTechnology: "",
      });
    }
  };
  const handleRemoveTechnology = (index) => {
    const updatedTechnologies = [...FormValues.technologies];
    updatedTechnologies.splice(index, 1);
    setFormData({ ...FormValues, technologies: updatedTechnologies });
  };

  const handleValidation = () => {
    const { title, category, location,organizer, date,description, image } = FormValues;
    if (title === "") {
      toast.error("Event name is required", toastOptions);
      return false;
    } else if (category === "") {
      toast.error("Category is required", toastOptions);
      return false;
    } else if (location === "") {
      toast.error("location is required", toastOptions);
      return false;
    } else if (organizer === "") {
      toast.error("organizer is required", toastOptions);
      return false;
    } else if (!image) {
      toast.error("image is required", toastOptions);
      return false;
    }
     else if (description==="") {
      toast.error("Description is required", toastOptions);
      return false;
    }
     else if (date==="") {
      toast.error("Date is required", toastOptions);
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (handleValidation()) {
      const formData = new FormData();
      formData.append("title", FormValues.title);
      formData.append("category", FormValues.category);
      formData.append("location", FormValues.location);
      formData.append("organizer", FormValues.organizer);
      formData.append("description", FormValues.description);
      formData.append("technologies", FormValues.technologies);
      formData.append("date", FormValues.date);
      formData.append("image", FormValues.image);
  
      try {
        const response = await axios.post(addEventRoute, formData);
        toast.success("Event is created", toastOptions);
        setFormData({
          title: "",
          category: "",
          location: "",
          organizer: "",
          description: "",
          date: "",
          image: null,
          technologies: [],
          newTechnology: "",
        });
      } catch (error) {
        toast.error("Event creation failed", toastOptions);
      }
    }
  };
  return (
    <>
      <OuterContainer>
        <ContactContainer>
          <h2>Add Events</h2>
          <ContactForm onSubmit={(event) => handleSubmit(event)}>
            <input
              className="fields"
              name="title"
              type="text"
              placeholder="Event Name"
              value={FormValues.title}
              onChange={(e) => handleChange(e)}
            />
            <input
              className="fields"
              id="category"
              name="category"
              placeholder="Category (Technology or any other)"
              value={FormValues.category}
              onChange={(e) => handleChange(e)}>
             
            </input>
            
            <input
              className="fields"
              name="organizer"
              type="text"
              placeholder="Organizer"
              value={FormValues.organizer}
              onChange={(e) => handleChange(e)}
            />
            <input
              className="fields"
              name="location"
              type="text"
              placeholder="Location"
              value={FormValues.location}
              onChange={(e) => handleChange(e)}
            />
          
            <input
              className="fields"
              name="date"
              type="date"
              placeholder="Date"
            
              onChange={(e) => handleChange(e)}
            />
          
            <input
              className="fields"
              name="image"
              onChange={(e) => handleChange(e)}
              type="file"
            />
            <AddTechnology>
        <input
          className="fields"
          name="newTechnology"
          type="text"
          placeholder="Technologies"
          value={FormValues.newTechnology}
          onChange={(e) => handleChange(e)}
        />
        <MdAddCircle className="add-btn" onClick={handleAddTechnology} />
      </AddTechnology>
      <TechnologiesContainer>
        {FormValues.technologies.map((technology, index) => (
          <div key={index}>
          {technology}
          <AiFillCloseCircle className="close-btn"  onClick={() => handleRemoveTechnology(index)}/>
          </div>
        ))}
      </TechnologiesContainer>

            <TextArea
              name="description"
              placeholder="Description"
              value={FormValues.description}
              onChange={(e) => handleChange(e)}></TextArea>

            <Button type="submit">Create</Button>
          </ContactForm>
        </ContactContainer>
      </OuterContainer>
      <ToastContainer />
    </>
  );
};

export default AddEventsForm;

const OuterContainer = styled.div`
  padding: 20px 0;
  width: 100%;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #7beaa4;
  width: 80%;
  border-radius: 30px;
  margin: 0 auto;

  h2 {
    margin-bottom: 10px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  row-gap: 20px;

  .fields {
    margin-bottom: 1rem;
    padding: 10px;
    font-size: 15px;
    border-radius: 5px;
    border:3px solid #09b585;
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 10px;
  font-size: 15px;
  border-radius: 5px;
  border:3px solid #09b585;
  width: 100%;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const AddTechnology=styled.div`
display:flex;
width:100%;
align-items:flex-start;
column-gap:10px;

.add-btn{
  font-size:40px;
  cursor:pointer;
}

`

const TechnologiesContainer=styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
column-gap:10px;
div{
  padding:10px;
  background:aliceblue;
  border-radius:20px;
display:flex;
align-items:center;
  .close-btn{
   margin-left:10px;
   font-size:20px;
   cursor:pointer;
  }
}
`