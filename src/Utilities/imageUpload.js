import axios from "axios";
const imageHostingApi = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageUploadingApi = `https://api.imgbb.com/1/upload?key=${imageHostingApi}`;

export const imageUpload = async (imageData) => {
  const imageDataForBB = { image: imageData };

  const res = await axios.post(imageUploadingApi, imageDataForBB, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  const url = res.data.data.display_url;
    console.log(url);
  return { url };
};