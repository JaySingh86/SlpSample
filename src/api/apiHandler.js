import axios from './axiosConfig'; // Importing the configured Axios instance

// Utility function to handle API requests
const handleApiRequest = async (url, method, data = null, headers = null, configs = {}) => {
  const config = {
    url,
    method,
    data,
    headers,
    ...configs, // Merge custom configurations if provided
  };

  try {
    const response = await axios(config);
    return response.data; // Return the API response data
  } catch (error) {
    console.error(`API Error [${method}] ${url}:`, error.response || error);
    throw error.response?.data || 'Something went wrong';
  }
};

// Wrapped Fetch function for generic API requests
export const wrappedFetch = (url, method, data = null, headers = null, configs = {}) => {
  return handleApiRequest(url, method, data, headers, configs);
};

// Wrapped Get function for GET API requests
export const wrappedGet = (url, method = 'GET', headers = null, configs = {}) => {
  return handleApiRequest(url, method, null, headers, configs); // Default to GET, no data for GET request
};




// // 1. Fetching data using GET
// const getData = async () => {
//     try {
//       const data = await wrappedGet('/posts');  // GET request to fetch posts
//       console.log('Fetched data:', data);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   // 2. Adding data using POST
//   const postData = async () => {
//     try {
//       const newData = { title: 'New Post', body: 'This is a new post.', userId: 1 };
//       const response = await wrappedFetch('/posts', 'POST', newData);  // POST request to add a new post
//       console.log('Added data:', response);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   // 3. Updating data using PUT
//   const putData = async (id) => {
//     try {
//       const updatedData = { title: 'Updated Title', body: 'Updated content.' };
//       const response = await wrappedFetch(`/posts/${id}`, 'PUT', updatedData);  // PUT request to update a post
//       console.log('Updated data:', response);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  
//   // 4. Deleting data using DELETE
//   const deleteData = async (id) => {
//     try {
//       const response = await wrappedFetch(`/posts/${id}`, 'DELETE');  // DELETE request to delete a post
//       console.log('Deleted data:', response);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  