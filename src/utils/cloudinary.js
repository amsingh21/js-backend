import { v2 as cloudinary} from "cloudinary";

import fs from "fs"

import { ApiError } from "./ApiError.js";

  // Configuration
  cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME , 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

  
const uploadOnCloudinary = async (localFilePath)=> {
    try {
       if (!localFilePath) return null
       console.log(`File path inside cloudinary utils ${localFilePath}`);
       //upload the file on cloudinary
       const response = await cloudinary.uploader.upload(localFilePath , {
        resource_type: "auto"
       }
       ) 

       
       // file has been uploaded successfully 
       //console.log("File is uplaoded on cloudinary", response.url);
       fs.unlinkSync(localFilePath)

        return response;
    } catch (error) {

        console.log("File upload failed on cloudinary");
        fs.unlinkSync(localFilePath) // removes locally saved tem file as the upload operation got failed 
        throw new ApiError(400, error)
        return null
    }
}

const deletOnCloudinary = async (oldLocalFilePath)=> {
    try {
       if (!oldLocalFilePath) return null
       console.log(`old File path inside cloudinary utils ${oldLocalFilePath}`);
       //upload the file on cloudinary
       const response = await cloudinary.uploader.destroy(oldLocalFilePath , {
        resource_type: "auto"
       }
       ) 

       
       // file has been uploaded successfully 
       //console.log("File is uplaoded on cloudinary", response.url);
       fs.unlinkSync(oldLocalFilePath)

        return response;
    } catch (error) {

        console.log("File delete failed on cloudinary");
        fs.unlinkSync(oldLocalFilePath) // removes locally saved tem file as the upload operation got failed 
        throw new ApiError(400, error)
        return null
    }
}


export {uploadOnCloudinary,
    deletOnCloudinary
}