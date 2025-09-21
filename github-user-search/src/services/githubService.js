// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/';

/**
 * Fetch user data from GitHub API
 * @param {string} username - GitHub username
 * @returns {Promise<object>} user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
