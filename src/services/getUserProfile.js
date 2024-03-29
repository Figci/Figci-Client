import generateApiUri from "../utils/generateURI";

const getUserProfile = async () => {
  const baseURI = import.meta.env.VITE_BACKEND_BASE_API_URI;

  const token = JSON.parse(localStorage.getItem("FigmaToken")).access_token;
  const API_URI = generateApiUri(baseURI, `user`);

  const response = await fetch(API_URI, {
    method: "GET",
    headers: {
      authorization: token,
    },
  });

  const responseResult = await response.json();

  return responseResult;
};

export default getUserProfile;
