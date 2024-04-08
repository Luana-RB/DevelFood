import axios from 'axios';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkZXZlbGZvb2QiLCJzdWIiOiI2Iiwicm9sZXMiOlsiUk9MRV9SRVNUQVVSQU5UIl0sImV4cCI6MTcxMjc1NjI3Nn0.0jB6yChGUKk1mi06XeQz59XTXUmYSgDPlk_C2oBNlgY';

export const api = axios.create({
  baseURL: 'https://open-phoenix-secondly.ngrok-free.app',
});

export const headers = {
  Authorization: `Bearer ${token}`,
};
