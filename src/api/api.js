/*these are functions we can then call to help "collapse" the api calls in our components so not too lengthy */
const apiUrl = "http://localhost:8080";

export const fetchData = async (endpoint) => {// get request
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

