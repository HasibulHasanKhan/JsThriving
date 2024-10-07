function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}

function displayPosts(posts) {
  const container = document.getElementById("container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    console.log(post);

    postDiv.innerHTML = `
       <h2> User: ${post.userId} <h2>
       <h2> Post: ${post.title}</h2>
       <p> Post Descripttion: ${post.body} </p>

     `;
    container.appendChild(postDiv);
  }
}
