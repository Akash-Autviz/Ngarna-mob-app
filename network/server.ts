import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { baseUrl } from "../utils";



const server = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});




interface axiosBaseQueryParams {
  endPoint: string;
  method: AxiosRequestConfig["method"];
}

const getData = async (endPoint: string, id?: number): Promise<any> => {
  try {
    const result = await server.get(endPoint, { params: { id } });
    return { data: result.data.result, status: result.status };
  } catch (axiosError) {
    let err = axiosError as AxiosError;
    return {
      error: { status: err.response?.status, data: err.response?.data },
    };
  }
};

const deleteData = async (endPoint: string, id?: number): Promise<any> => {
  try {
    const result = await server.delete(endPoint, { params: { id } });
    console.log("apiHitSuceesFull", endPoint);
    return { data: result.data.result, status: result.status };
  } catch (axiosError) {
    console.log("error", endPoint, axiosError);
    let err = axiosError as AxiosError;
    return {
      error: { status: err.response?.status, data: err.response?.data },
    };
  }
};

export { getData, deleteData };
