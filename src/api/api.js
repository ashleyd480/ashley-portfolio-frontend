/*these are functions we can then call to help "collapse" the api calls in our components so not too lengthy */
// const apiUrl = "http://localhost:8080";
// const apiUrl = "https://ashley-portfolio-29f132612fe3.herokuapp.com";

const apiUrl = import.meta.env.VITE_BACKEND_API_URL;
console.log(apiUrl);

// this variable undefined on netlify because system did the git ignore of the env.local


export const fetchData = async (endpoint) => {
  // get request
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`);
    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


export const fetchGitData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};