import { create} from "zustand";
import { axiosInstance } from "../libs/axios";
import toast from "react-hot-toast";


export const useGenerateImage = create((set) => ({

  generatedImage:null,
  isGenerationgImage:false,

  
    generateImage: async (data) => {
      try {
        set({isGenerationgImage:true})
        const res =  await axiosInstance.post("/generate/generate-image", data)
        
        set({generatedImage:res.data.imageUrl})
        toast.success(res.data.message)
        
      } catch (error) {
        set({isGenerationgImage:false})
        // console.log("error", error)
      }finally{
        set({isGenerationgImage:false})
      }
    }


    

}))