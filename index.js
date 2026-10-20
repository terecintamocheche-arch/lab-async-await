// Write your code here!
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postList = document.getElementById("post-list");

  for (const post of posts) {
    const listItem = document.createElement("li");

    listItem.textContent = post.title;

    postList.appendChild(listItem);
  }
}

fetchPosts();