import axios from "axios";
const URL = "http://localhost:8080";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api =>", error);
  }
};
export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login api =>", error);
  }
};
export const payUsingPaytm = async (data) => {
  try {
    let resp = axios.post(`${URL}/payment`, data);
    return resp.data;
  } catch (error) {
    console.log("Error while calling payment api =>", error);
  }
};
