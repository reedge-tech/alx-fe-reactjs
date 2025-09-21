import axios from 'axios';
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: token ? { Authorization: `token ${token}` } : {},
});
export default github;
