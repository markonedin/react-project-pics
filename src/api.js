import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 7xBPd-JbVrPRo-igoI-p08JSDgC6Axxcxy0aQyTuggg",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
