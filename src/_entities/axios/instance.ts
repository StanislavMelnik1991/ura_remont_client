import axios, { AxiosInstance } from 'axios';

export class Axios {
  axios: AxiosInstance;
  constructor(token?: string) {
    this.axios = axios.create({
      baseURL: process.env.API_URL,
      headers: { Authorization: token },
    });
  }
}
