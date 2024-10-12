const postsContainer = document.getElementById("posts");
const postForm = document.getElementById("postForm");

let posts = [];

// Function to render posts
function renderPosts() {
  postsContainer.innerHTML = "";
  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <div class="comments">
                <h4>Comments:</h4>
                <div class="comments-list" id="comments-${index}"></div>
                <form class="comment-form" id="commentForm-${index}">
                    <input type="text" placeholder="Add a comment" required>
                    <button type="submit">Comment</button>
                </form>
            </div>
        `;

    // Add comment functionality
    const commentForm = postDiv.querySelector(`#commentForm-${index}`);
    commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const commentInput = commentForm.querySelector("input");
      addComment(index, commentInput.value);
      commentInput.value = ""; // Clear the input field
    });

    // Append comments
    post.comments.forEach((comment) => {
      addCommentToPost(index, comment);
    });

    postsContainer.appendChild(postDiv);
  });
}

// Function to add a new post
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("postTitle").value;
  const content = document.getElementById("postContent").value;

  const newPost = {
    title,
    content,
    comments: [],
  };

  posts.push(newPost);
  renderPosts();
  postForm.reset(); // Clear form inputs
});

// Function to add a comment
function addComment(postIndex, comment) {
  posts[postIndex].comments.push(comment);
  addCommentToPost(postIndex, comment);
}

// Function to display a comment under the post
function addCommentToPost(postIndex, comment) {
  const commentsList = document.getElementById(`comments-${postIndex}`);
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  commentDiv.textContent = comment;
  commentsList.appendChild(commentDiv);
}

// Initial render
renderPosts();
