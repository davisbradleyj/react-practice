import axios from 'axios';

const INSTANCE = axios.create({
  baseURL: 'https://hamburder-helper-default-rtdb.firebaseio.com/'
});

export default INSTANCE;