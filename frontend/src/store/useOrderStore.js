import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";


export const useOrderStore = create((set)=>({
    orders:[],
    currentOrder:null,
    isLoading: false,
    
    
    placeOrder: async({bookId, quantity, status})=>{
     set({isLoading:true})
     try {
        const res = await axiosInstance.post("/order/place-order" , {
            bookId,
            quantity,
            status
        })
        toast.success("Order placed successfully!")
        set({currentOrder: res.config.data.data, isLoading:false})
     } catch (error) {
        console.error("Error in placing order", error);
        
        toast.error(error.response?.data?.message || "failed to place order")
     }finally{
        set({isLoading:false});
     }
    },

    fetchUserOrder:async()=>{
        set({isLoading:true})
        try {
            const res = await axiosInstance.get("/order/get-order")
            set({currentOrder: res.data.data, isLoading:false})
        } catch (error) {
          console.error("Error in fetching order", error);
        
        toast.error(error.response?.data?.message || "failed to fetch order")  
        } finally{
             set({isLoading:false})
        }
    },

    getOderDetails: async(orderId)=>{
      set({isLoading:true})
      try {
        const res = await axiosInstance.get(`/order/order-details/${orderId}`)
        set({currentOrder: res.data.data, isLoading: false})
      } catch (error) {
       console.error("Failed to get order details", error);
        
        toast.error(error.response?.data?.message || "Failed to get order details")  
        } finally{
             set({isLoading:false})
        }
    },

    deleteOrder: async(orderId)=>{
     set({isLoading:true})
      try {
        await axiosInstance.get(`/order/delete/${orderId}`)
        toast.success("Order deleted successfully")
        set((state)=> ({
            currentOrder:
            state.currentOrder?.id === orderId ? null : state.currentOrder, isLoading :false
        }))
      } catch (error) {
       console.error("Failed to delete order", error);
        
        toast.error(error.response?.data?.message || "Failed to To delete order")  
        } finally{
             set({isLoading:false})
        }
    }
}))