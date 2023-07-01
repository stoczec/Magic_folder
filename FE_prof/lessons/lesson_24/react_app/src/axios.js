import axios from 'axios';

export const BASEURL = 'https://dummyjson.com';

// Ставлю конфигурацию axios, чтобы он любой запрос делал через BASEURL
// Таким образом я уже могу не писать везде "https://dummyjson.com"
const instance = axios.create({
  baseURL: `${BASEURL}/`,
});

export default instance;
