import { create} from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";


export const useAuth = create((set) => ({

  authUser:null,
  isCheckingAuth:false,

  isLogingIn: false,
  isLogingOut: false,

  isRegisterignUser: false,

  
    checkAuth: async () => {
      try {
        set({isCheckingAuth:true})
        const res =  await axiosInstance.post("/auth/getMe")
        
        set({authUser:res.data.data})
        
      } catch (error) {
        set({isCheckingAuth:false})
      }finally{
        set({isCheckingAuth:false})
      }
    },

    registerUser: async (data) => {
      try {
        set({isRegisterignUser:true})
        const res =  await axiosInstance.post("/auth/register", data)
        
        set({authUser:res.data.data})
        toast.success(res.data.message)
        
      } catch (error) {
        set({isRegisterignUser:false})
      }finally{
        set({isRegisterignUser:false})
      }
    },

    loginUser: async (data) => {
      try {
        set({isLogingIn:true})
        const res =  await axiosInstance.post("/auth/login", data)
        
        set({authUser:res.data.data})
        toast.success(res.data.message)
        
      } catch (error) {
        set({isLogingIn:false})
      }finally{
        set({isLogingIn:false})
      }
    },

    logoutUser: async () => {
      try {
        set({isLogingOut:true})
        const res =  await axiosInstance.post("/auth/logout")
        
        set({authUser:null})
        toast.success(res.data.message)
        
      } catch (error) {
        set({isLogingOut:false})
      }finally{
        set({isLogingOut:false})
      }
    }


    

}))