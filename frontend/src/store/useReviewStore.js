import { create} from "zustand"
import { axiosInstance } from "../lib/axios"
import toast from "react-hot-toast"

export const useReviewStore = create((set, get)=>({
    reviews:[],
    isLoading:false,


    addReview: async({bookId, title, message, rating}) => {
        set({isLoading:true});
        try {
            const res = await axiosInstance.post(`/review/add-review/${bookId}`, {
                title,
                message,
                rating,
            })
            toast.success("Review added successfully")
            // add new review to existing state
            set((state)=>({
                reviews: [...state.reviews, res.data.data],
                isLoading:false
            }))
        } catch (error) {
            console.error("Failed to add review", error);
            
            toast.error(err.response?.data?.message || "Failed to add review");
        } finally{
         set({ isLoading: false });
        }
    },

    listReviews:async(bookId)=>{
        set({isLoading:true})
        try {
            const res = await axiosInstance.get(`/review/${bookId}/reviews`)
            set({reviews: res.data.data, isLoading:false})
        } catch (error) {
           console.error("Failed to fetch reviews", error);
            
            toast.error(err.response?.data?.message || "Failed to fetch reviews");
        } finally{
         set({ isLoading: false });
        }
    },

    deleteReview:async(reviewId)=>{
  set({isLoading:true});
  try {
    await axiosInstance.delete(`/review/delete-review/${reviewId}`)
    toast.success("Review deleted successfully")
    set((state)=>({
        reviews: state.reviews.filter((review)=> review.id !== reviewId), isLoading:false
    }))
  } catch (error) {
    console.error("Failed to delete review", error);
            
            toast.error(err.response?.data?.message || "Failed to delete review");
        } finally{
         set({ isLoading: false });
        }
    }
}))