import axios from "axios";

export const fetchImages = async (query, page, signal) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=2GFk4d0ZaotLby7WLy2tWmmk4g-7OLck-BWzc2I4VJs&query=${query}&page=${page}`,
    { signal }
  );
  return response.data.results;
};
