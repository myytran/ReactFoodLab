import axios from 'axios';

const API_KEY='AIzaSyDCjrBXx-P8qB1cwCoWDUUKf2fUGHzyQR0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY
  }
});