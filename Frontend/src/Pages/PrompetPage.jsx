import React, { useEffect } from "react";
import { useGenerateImage } from "../store/useGenerateImage";
import { useForm } from "react-hook-form";

const PrompetPage = () => {
  const { generatedImage, isGenerationgImage, generateImage } =
    useGenerateImage();

  const { handleSubmit, register } = useForm();

  const generateImageBtn = (data) => {
    generateImage(data)
  };

  return (
    <div className="text-3xl">
      <form action={handleSubmit(generateImageBtn)}>
        <div>
          <label htmlFor="">Prompt</label>
          <input 
          className="bg-[#949494] text-white"
           {...register("prompt")}
           type="text"
            />
        </div>
        <div>
          <button type="submit" onClick={generateImageBtn}>
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrompetPage;
