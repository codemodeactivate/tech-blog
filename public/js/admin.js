//get buttons
const editButtons = document.querySelectorAll('.edit');
const deleteButtons = document.querySelectorAll('.delete');

editButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id');
    // set route set up at '/posts/edit/:id'
    window.location.href = `/posts/edit/${id}`;
  });
});




deleteButtons.forEach(button => {
  button.addEventListener('click', async (event) => {
    const id = event.target.getAttribute('data-id');
    // Send a DELETE request to the server
    const response = await fetch(`/posts/${id}`, {
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
