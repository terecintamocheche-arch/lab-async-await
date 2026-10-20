
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const postList = document.getElementById("post-list");

  for (const post of posts) {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);

    postList.appendChild(li);
  }
}

fetchPosts();

