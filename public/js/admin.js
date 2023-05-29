//get buttons
const editButtons = document.querySelectorAll('.edit');
const deleteButtons = document.querySelectorAll('.delete');

editButtons.forEach(button => {
  button.addEventListener('click', function(event) {
      const postId = event.target.dataset.id;
      const postElement = document.getElementById(`post-${postId}`);
      const postTitle = postElement.querySelector('h2').textContent;
      const postContent = postElement.querySelector('p').textContent;

      postElement.innerHTML = `

      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card shadow">
              <div class="card-body">
                <h1 class="text-center mb-4">Edit Post</h1>
                <form id="edit-form-${postId}">

                  <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" name="title" value="${postTitle}" required class="form-control">
                  </div>
                  <div class="mb-3">
                    <label for="post_content" class="form-label">Post Content</label>
                    <textarea name="post_content" required class="form-control">${postContent}</textarea>
                  </div>
                  <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">Update Post</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      `;

      const form = document.getElementById(`edit-form-${postId}`);
      form.addEventListener('submit', function(event) {
          event.preventDefault();

          const updatedTitle = event.target.elements.title.value;
          const updatedPostContent = event.target.elements.post_content.value;

          fetch(`/post/${postId}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                title: updatedTitle,
                 post_content: updatedPostContent
                }),
          })
          .then(response => response.json())
          .then(data => {
              postElement.innerHTML = `
                  <h2>${data.title}</h2>
                  <p>${data.post_content}</p>
                  <button class="edit" data-id="${data.id}">Edit</button>
                  <button class="delete" data-id="${data.id}">Delete</button>
              `;
          })
          .catch((error) => {
              console.error('Error:', error);
          });
      });
  });
});




deleteButtons.forEach(button => {
  button.addEventListener('click', async (event) => {

    const id = event.target.getAttribute('data-id');
    // Send a DELETE request to the server
    const response = await fetch(`/post/${id}`, {
      method: 'DELETE',
    });

    //if successful, refresh the page to update the list of posts
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete post');
    }
  });
});
