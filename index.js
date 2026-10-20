
async function fetchPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const posts = await response.json();
    const postList = document.getElementById("post-list");

    for (const post of posts) {
      const li = document.createElement("li");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");

      h1.textContent = post.title;
      p.textContent = post.body;

      li.appendChild(h1);
      li.appendChild(p);
      postList.appendChild(li);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

fetchPosts();



