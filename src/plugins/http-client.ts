/* eslint-disable camelcase */
import { AxiosResponse } from "axios";
import * as Config from "../constants/configuration";

export interface Response<T> {
  status_code: number;
  message: string;
  data: any;
}

const axios = require("axios").default;

type Methods = "POST" | "GET" | "DELETE" | "PUT" | "PATCH";

interface RequestSettings<R> {
  path: string;
  method: Methods;
  body?: R;
  params?: object;
  sendToken?: boolean;
}

class HttpClientService {
  private API_URL: string = Config.API_URL;

  fetch<R, T>(config: RequestSettings<R>): Promise<Response<T>> {
    return new Promise((resolve, reject) => {
      axios({
        method: config.method,
        // url: this.API_URL + config.path,
        url: config.path,
        data: config.body,
        params: config.params,
        headers: config.sendToken && {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
        .then((response: AxiosResponse) => {
          // @ts-ignore
          resolve(response.data);
        })
        .catch((e: any) => {
          try {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject({ ...e.response, data: JSON.parse(e.response.data) });
          } catch (error) {
            reject(e.response);
          }
        });
    });
  }
}

export default new HttpClientService();
