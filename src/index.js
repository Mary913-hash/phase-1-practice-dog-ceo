document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedDropdown = document.getElementById("breed-dropdown");
    let allBreeds = [];
  
    // Fetch random dog images and display them
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        console.log('%c Dog Images:', 'color: firebrick', data); // Logging dog images in styled format
        const imageContainer = document.getElementById("dog-image-container");
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imageContainer.appendChild(imgElement);
        });
      });
  
    // Fetch all dog breeds and display them in the <ul>
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        console.log('%c Dog Breeds:', 'color: firebrick', data); // Logging dog breeds in styled format
        allBreeds = Object.keys(data.message); // Store all breeds
        displayBreeds(allBreeds);
      });
  
    // Function to display breeds in the <ul>
    function displayBreeds(breeds) {
      const breedList = document.getElementById("dog-breeds");
      breedList.innerHTML = ""; // Clear previous list
      breeds.forEach(breed => {
        const liElement = document.createElement("li");
        liElement.textContent = breed;
        breedList.appendChild(liElement);
  
        // Add event listener for font color change on click
        liElement.addEventListener("click", function () {
          liElement.style.color = "blue"; // Change font color
        });
      });
    }
  
    // Event listener for dropdown to filter breeds
    breedDropdown.addEventListener("change", function (e) {
      const selectedLetter = e.target.value;
      const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
      displayBreeds(filteredBreeds); // Display filtered breeds
    });
  });
  
  
    