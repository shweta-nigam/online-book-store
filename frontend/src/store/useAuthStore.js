import { create } from  "zustand";
import { axiosInstance } from "../libs/axios.js"
import toast from "react-hot-toast"
import axios from "axios";

export const useAuthStore = create((set)=> ({
    authUser:null,
    isSigninUp:false,
    isLoggingIn:false,
    isCheckingAuth:false,

    checkAuth: async () =>{
        set({ isCheckingAuth :true});
        try {
            const res = await axiosInstance.get("/auth/profile")
            console.log("checkAuth response", res.data);

            set({authUser : res.data.data})
            
        } catch (error) {
            console.log("Error checking auth:", error);
            set({authUser: null})
        } finally {
            set({isCheckingAuth : false})
        }
    },

    signup: async(data) => {
        set({ isSigninUp:true});
        try {
            const res = await axiosInstance.post("/auth/register", data);

            // set({authUser:res.data.user})

            toast.success(res.data.message)

            await useAuthStore.getState().checkAuth()   // fetch fresh user profile
        } catch (error) {
            console.error("Error signing up", error);
            toast.error("Error signing up") 
        }finally{
            set({isSigninUp:false})
        }
    },

    login: async(data) => {
        set({isLoggingIn :true});
        try {
            const res = await axiosInstance.post("/auth/login", data);

            // set({authUser: res.data.user});

            await useAuthStore.getState().checkAuth();

            toast.success(res.data.message)
        } catch (error) {
           console.error("Error logging in", error);
            toast.error("Error logging in")
        }finally{
            set({isLoggingIn:false})
        }
    },

    logout: async() => {
       try {
         await axiosInstance.get("/auth/logout")
 
         set({authUser:null})
         toast.success("Logout successfully")
       } catch (error) {
        console.error("Error logging out", error);
        toast.error("Error logging out")
       }
    },

    forgotPassword: async (email) => {
        try {
            const res = await axiosInstance.post("/auth/forgot-password", {email})

            toast.success(res.data.message)
        } catch (error) {
            console.error("Error in forgot password", error);
            toast.error("Error while sending forgot password email")
            
        }
    },

    generateApiKey: async() => {
        try {
            const res = await axiosInstance.post("/auth/api-key")
            toast.success(res.data.message)
        } catch (error) {
            console.error("Error while generating api key");
            toast.error("Error while generating api key")
        }
    }
 }))


