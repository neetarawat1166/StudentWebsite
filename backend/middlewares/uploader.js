import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: "dozb2zdev",
  api_key: "486964634753983",
  api_secret: "PJSeC9yqQvx_aE7mA2Jfbbh4oi4"
});

export const uploadFile = async (filepath) => {
  try {
    const uploadresult = await cloudinary.uploader.upload(filepath);
    return uploadresult;
  } catch (error) {
    console.log("Error in Cloudinary:", error);
    throw error;
  }
};
