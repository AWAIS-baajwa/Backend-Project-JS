import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOncloudinary = async (localFilepath) => {
  try {
    if (!localFilepath) return null;
    const response = await cloudinary.uploader.upload(localFilepath, {
      resource_type: "auto",
    });
    // console.log("file is uploaded on cloudinary", response);
    fs.unlinkSync(localFilepath); //remove locally saved file if upload operation successfull
    return response;
  } catch (error) {
    fs.unlinkSync(localFilepath); //remove locally saved file if upload operation failed
    return null;
  }
};

const deleteFromCloudinary = async (public_Id) => {
  return await cloudinary.uploader.destroy(public_Id, {
    resource_type: image,
  });
};

export { uploadOncloudinary, deleteFromCloudinary };
