import axios from "axios";

const apiUrl = "http://localhost:8000/api/v1/user";

const transUrl = "http://localhost:8000/api/v1/transaction";

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
export const loginUser = async (userObj) => {
  try {
    const { data } = await axios.post(apiUrl + "/login", userObj);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};


// trans


export const addTrans = async(obj) => {
  try {
    const {data} = await axios.post(transUrl, obj)
    console.log(data)
    return data
  } catch (error) {
    return{
      status:"error",
      message:error.message
    }
    
  }
}