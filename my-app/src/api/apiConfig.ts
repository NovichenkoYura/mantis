import axios from 'axios';

export const instance = axios.create({
  headers: {
    'content-type': 'application/json',
    accept: 'application/json'
    // eslint-disable-next-line prettier/prettier
    // Referer: 'https://my.mantis.com.ua/'
    // Authorization: 'Bearer 6ea32a8a2373eb3b46dc8884f5c83bfd799caec1'
  }
});
