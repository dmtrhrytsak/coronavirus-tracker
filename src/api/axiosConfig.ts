import axios, { AxiosError } from 'axios';

export const apiCoronaVirus = axios.create({
  baseURL: 'https://corona.lmao.ninja/v2/',
});

export const handleError = (error: AxiosError) => {
  if (error.response) {
    console.warn(error.response.data);
    console.warn(error.response.status);
    console.warn(error.response.headers);
  } else if (error.request) {
    console.warn(error.request);
  } else {
    console.warn('Error', error.message);
  }
};

export const delay = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
};
