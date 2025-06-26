import axios from "axios"


export const axiosInstance =  axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api/v1" : "api/v1",
    withCredentials:true
})

//  axios.create() is a method provided by Axios to create a custom Axios instance with its own default configuration.