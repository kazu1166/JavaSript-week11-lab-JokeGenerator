// Function to generate a joke and display it on the page
const generateJoke = () => {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Set up the request to the Chuck Norris API
  xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);

  // Event listener for when the request is completed
  xhr.onload = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Parse the JSON response
      const response = JSON.parse(xhr.responseText);

      // Display the joke in the "joke" element
      document.getElementById("joke").innerHTML = response.value;
    } else {
      // Display an error message if the request fails
      document.getElementById("joke").innerHTML =
        "Something went wrong. Please try again.";
    }
  };

  // Send the request
  xhr.send();
};

// Event listener for the button click to fetch a new joke
document.getElementById("joke-btn").addEventListener("click", generateJoke);

// Fetch a joke immediately when the page loads
document.addEventListener("DOMContentLoaded", generateJoke);
