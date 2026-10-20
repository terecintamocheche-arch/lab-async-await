// Write your code here!

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postList = document.getElementById("post-list");

  for (const post of posts) {
    const heading = document.createElement("h1");
    heading.textContent = post.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = post.body;

    const listItem = document.createElement("li");
    listItem.appendChild(heading);
    listItem.appendChild(paragraph);

    postList.appendChild(listItem);
  }
}

fetchPosts();
