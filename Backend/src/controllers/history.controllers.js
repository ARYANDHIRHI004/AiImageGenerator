import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";  
import { History } from "../models/history.models.js";

export const getAllHistory = asyncHandler(async (req, res) => {
  
    const userId = req.user._id;

    if(!userId){
        throw new ApiError(400, "Unauthorized request");
    }

    const historys = await History.find({ 
        user: userId
    });

    if(history.length === 0){
        return res.status(200).json(
            new ApiResponse({
                success: true,
                message: "No history found",
                data: []
            })
        );

    }

    return res.status(200).json(
        new ApiResponse({
            success: true,
            message: "History fetched successfully",
            data: historys
        })
    );
    
})

export const getHistoryById = asyncHandler(async (req, res) => {

    const userId = req.user._id;
    const historyId = req.params.historyId;

    if(!userId){
        throw new ApiError(400, "Unauthorized request");
    }

    if(!historyId){
        throw new ApiError(400, "History ID is required");
    }

    const history = await History.findOne({ 
        _id: historyId,
        user: userId
    });

    if(!history){
        throw new ApiError(404, "History not found");
    }

    return res.status(200).json(
        new ApiResponse({
            success: true,
            message: "History fetched successfully",
            data: history
        })
    );
  
})

export const deleteHistory = asyncHandler(async (req, res) => {
  
    const userId = req.user._id;
    const historyId = req.query.historyId;

    if(!userId){
        throw new ApiError(400, "Unauthorized request");
    }

    if(!historyId){
        throw new ApiError(400, "History ID is required");
    }

    const history = await History.findOneAndDelete({ 
        _id: historyId,
        user: userId
    });

    if(!history){
        throw new ApiError(404, "History not found");
    }

    return res.status(200).json(
        new ApiResponse({
            success: true,
            message: "History deleted successfully",
        })
    );
})