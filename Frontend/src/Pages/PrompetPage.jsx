import React, { useEffect } from "react";
import { useGenerateImage } from "../store/useGenerateImage";
import { useForm } from "react-hook-form";

const PrompetPage = () => {
  const { generatedImage, isGenerationgImage, generateImage } =
    useGenerateImage();

  const { handleSubmit, register } = useForm();

  const generateImageBtn = (data) => {
    generateImage(data);
  };

  return (
    <div className="text-3xl h-screen pt-30 text-[#eac3f8] bg-[#211522]">
      <div className="text-center">
        <h1 className="font-bold text-6xl mt-40 leading-20">
          Welcome To Imagify
        </h1>
        <h1 htmlFor="">Imagify whatever your want </h1>
      </div>
      <form action={handleSubmit(generateImageBtn)}>
        <div className="flex flex-col justify-center items-center gap-5 mt-20">
          <div className="flex  items-center">
            <input
              className="bg-[#613659] w-200 rounded-l-2xl h-15 text-white px-6 text-xl"
              type="text"
              placeholder="Type your prompt here"
              {...register("prompt")}
            />
            <div className="bg-[#c197d2]  text-[#35132f] font-bold flex rounded-r-2xl h-15 px-6 text-xl">
              <button type="submit" onClick={generateImageBtn}>
                Generate
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PrompetPage;
