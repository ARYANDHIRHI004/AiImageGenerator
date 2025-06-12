import React from "react";
import { useGenerateImage } from "../store/useGenerateImage";

const Images = () => {
  const { generatedImage, isGenerationgImage } =
    useGenerateImage();

  return <div className="bg-yellow-500 h-50">
    {
        !isGenerationgImage?(
            <img className="w-50" src={generatedImage} alt="image" />
        ):("loading...")
    }
  </div>;
};

export default Images;
