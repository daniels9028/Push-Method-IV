import { axiosInstance as axios } from "./axios";

export const getAllUsers = async (page) => {
  try {
    const data = await axios({
      url: `?page=${page}&results=10&seed=abc`,
      method: "GET",
    });

    return data;
  } catch (error) {
    throw error;
  }
};
