import axios from "axios";

const apiUrl = "http://localhost:8000/api/v1/user";

export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(apiUrl, userObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
