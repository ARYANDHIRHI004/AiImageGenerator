import { InferenceClient } from "@huggingface/inference";
import asyncHandler from "../utils/asyncHandler.js";

export const generateImage = asyncHandler(async (req, res) => {
  const { prompt } = req.body;

  const hf = new InferenceClient(process.env.API_TOKEN);

  try {
    const blob = await hf.textToImage({
      model: "black-forest-labs/FLUX.1-dev",
      inputs: prompt,
    });

    console.log(blob);
    const arrayBuffer = await blob.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Convert to base64 string
    const base64Image = buffer.toString("base64");

    return res.status(200).json({
      success: true,
      message: "Image generate successfully",
      imageUrl: `data:image/png;base64,${base64Image}`,
    });
  } catch (error) {
    console.error("Error generating image:", error);
  }
});
