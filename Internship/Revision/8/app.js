document.addEventListener("DOMContentLoaded", function () {
  let postsContainer = document.querySelector(".posts-container");
  let loadingIndicator = document.querySelector(".loading-indicator");
  let errorMessage = document.querySelector(".error-message");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      loadingIndicator.style.display = "none";

      posts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.classList.add("card");
        postCard.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                `;
        postsContainer.appendChild(postCard);
      });
    })
    .catch((error) => {
      loadingIndicator.style.display = "none";
      errorMessage.style.display = "block";
      console.error(error);
    });
});
