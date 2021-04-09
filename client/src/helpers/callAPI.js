import axios from 'axios';
import axiosInstance from './axiosInstance';

// GET REQUEST 
export async function get(url, auth = false) {
  if (!auth) {
    return await axios.get(url)
  }
  return await axiosInstance.get(url)
}

// POST REQUEST 
export async function post(url, data, auth = false) {
  if (!auth) {
    return await axios.post(url, data)
  }
  return await axiosInstance.post(url, data)
}

// DELETE REQUEST 
export async function Delete(url, data = {}, auth = false) {
  if (!auth) {
    return await axios.delete(url, data)
  }
  return await axiosInstance.delete(url, { data })
}

// PATCH REQUEST 
export async function patch(url, data = {}, auth = false) {
  if (!auth) {
    return await axios.patch(url, data)
  }
  return await axiosInstance.patch(url, data)
}
