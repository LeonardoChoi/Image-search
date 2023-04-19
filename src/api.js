import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID vnXiCAYwFDEzUKXa-r4a-wyQkSXgT-8lhXxe-VQBblY",
    },
    params: {
      query: "cars",
    },
  });
  return response;
};

export default searchImages;
