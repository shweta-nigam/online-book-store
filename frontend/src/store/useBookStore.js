import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";

export const useBookStore = create((set) =>( {
    books: [],      // all book list
    selectBook: null,       //For book details
    isLoading:false,        //  for loading state
    error:null,             // for error state 


fetchAllBooks: async (query = "") => {
  set({ isLoading: true });
  try {
   const res = await axiosInstance.get(`/book/all-books${query ? `?q=${encodeURIComponent(query)}` : ""}`);
    console.log("Response:", res.data);
    set({ books: res.data.data });
    return res.data.data; 
  } catch (error) {
    console.error("Error fetching books", error);
    set({ error: "Failed to load books" });
    toast.error("Error loading books");
  } finally {
    set({ isLoading: false });
  }
},


addBook: async(bookData) => {
      set({isLoading:true})
    try {
        const res = await axiosInstance.post("/book/add-book", bookData)
        toast.success(res.data.message)

        await useBookStore.getState().fetchAllBooks()
    } catch (error) {
        console.error("Error while adding a book", error);
        toast.error("Error while adding a book")
    }finally{
        set({isLoading:false})
    }
},

 deleteBook: async(bookId)=>{
set({isLoading:true})
try {
    const res = await axiosInstance.delete(`/book/delete-book/${bookId}`)
    toast.success(res.data.message)
    await useBookStore.getState().fetchAllBooks()
} catch (error) {
    console.error("Error while deleting book", error);
    toast.error("Error while deleting book")
}finally{
    set({isLoading:false})
}
 },

 updateBook:async(bookId, updateData)=> {
    set({isLoading:true})
    try {
        const res = await axiosInstance.put(`/book/update-book/${bookId}`, updateData)
        toast.success(res.data.message)

        await useBookStore.getState().fetchAllBooks();
    } catch (error) {
        console.error("Error updating book", error);
        toast.error("Error updating book")
    }finally{
        set({isLoading:false})
    }
 },

 fetchBookDetails: async(bookId) =>{
    set({isLoading:true})
    try {
        const  res = await axiosInstance.get(`/book/get-book-details/${bookId}`)
        set({selectBook: res.data.data})
    } catch (error) {
        console.error("Error fetching book details");
        set({error: "Failed to load book details"})
    } finally{
        set({isLoading:false})
    }
 }

}))