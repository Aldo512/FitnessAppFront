import axios from "axios";

export const ApiService = () => {
  return axios.create({
    baseURL: "http://some-domain.com/api/",
    timeout: 1000,
  });
};

// ApiService.get
