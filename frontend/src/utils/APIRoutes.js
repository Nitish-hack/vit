//export const host = "http://localhost:5000";
export const host = "https://vitcompanionbackend.onrender.com";

//student routes
export const loginRoute = `${host}/api/student/login`;
export const signupRoute = `${host}/api/student/signup`;
export const verifyRoute= `${host}/api/student/verifytoken`;
export const myeventsRoute= `${host}/api/student/myevents`;
export const registerEventRoute= `${host}/api/student/register/event`;



//event routes
export const allEventsRoute = `${host}/api/event/allevents`;
export const singleEventsRoute = `${host}/api/event/getevent`;
export const addEventRoute = `${host}/api/event/addevent`;

