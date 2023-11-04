import axios from "axios";


/**
 * FORMATING DATE
 */
const formatDate = (dateString) => {

  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  // const options = { year: 'numeric', month: 'short', day: 'numeric' };
  // const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  return formattedDate;
}
///end formating date


// const BASE_URL='http://localhost:1337/api';
const BASE_URL = "https://tubeguruji-admin.herokuapp.com/api";
const BASE_URL_PED = "https://pedbackend.onrender.com/api";

const getPost = axios.get(BASE_URL + "/blogs?populate=*");
const getPostById = (id) =>
  axios.get(BASE_URL + "/blogs/" + id + "?populate=*");
const getPostsById = (id) =>
  axios.get(BASE_URL_PED + "/v1/ped/blogs/" + id );

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
  try {
    axios.post(BASE_URL_PED + "/v1/ped/users/login", userData).then(response => {
      if (response.data.message) {
        localStorage.setItem("authToken", response.data.token);
        console.log(response);
        console.log(response.data);
        console.log("Token " + localStorage.getItem("authToken"));
        console.log(response.data);
        alert(response.data.message);
        window.location.reload();
      } else {
        alert("Try again! \nSomething wrong happened.");
      }
    })
  } catch (error) {
    console.log("Login Failed: " + error);
  }
};

// /api/v1 / ped / blogs / by - owner / { id }
// Get blogs by owner or admin with optional pagination.
const myBlogs = async (userId) => {

  const token = localStorage.getItem("authToken");
  if (!token) {
    // Handle the case when there's no token available, e.g., redirect to login page
    throw new Error("No authorization token found.");
  }

  try {
    const response = await axios.get(BASE_URL_PED + "/v1/ped/blogs/by-owner/" + userId , {
      headers: {
        authorization: `Bearer ${token}`,
      }
    });

    // Access the data from the response object
    const responseData = response.data;

    // You can also log the entire response object for inspection
    console.log('Response Data:', responseData);

    // Return the response data as needed
    return responseData;
  } catch (error) {
    // Handle any errors that might occur during the request
    console.error('Error:', error);
    throw error;
  }
}

//=============== USERS MANAGMENT ================//
//--get all users
const getUsers = axios.get(BASE_URL_PED + "");

// end
export default {
  formatDate,
  getPost,
  getPostById,
  getPostsById,
  getBlogsPag,
  registerUser,
  getMostTenBlogs,
  loginUser,
  myBlogs,
};
