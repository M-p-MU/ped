import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// const BASE_URL='http://localhost:1337/api';
const BASE_URL = "https://tubeguruji-admin.herokuapp.com/api";
const BASE_URL_PED = "https://pedbackend.onrender.com/api";

const getPost = axios.get(BASE_URL + "/blogs?populate=*");
const getPostById = (id) =>
  axios.get(BASE_URL + "/blogs/" + id + "?populate=*");

/**
 *  PED API'S
 */
//get blogs with pagination
const getBlogsPag = (page_no) =>
  axios.get(BASE_URL_PED + "/v1/ped/blogs/paginated?page=" + page_no);
//get blogs
// const getBlogs = axios.get(BASE_URL_PED + "/v1/ped/blogs");

//get top 10 blogs
const getMostTenBlogs = axios.get(BASE_URL_PED + "/v1/ped/top-blogs");

//=============== AUTHENTIFACATION ================//
//--REGISTER
const registerUser = async (userData) => {
  return axios.post(BASE_URL_PED + "/v1/ped/users/signup", userData);
};

//--LOGIN
const loginUser = async (userData) => {
  return axios.post(BASE_URL_PED + "/v1/ped/users/login", userData);
};

//=============== USERS MANAGMENT ================//
//--get all users
const getUsers = axios.get(BASE_URL_PED + "");

// end
export default {
  getPost,
  getPostById,
  getBlogsPag,
  registerUser,
  // getBlogs,
  getMostTenBlogs,
  loginUser,
};
