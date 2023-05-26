//event listener for leave a comment button
const leaveComment = document.getElementById('leave-comment');

leaveComment.addEventListener('click', async (event) => {
    event.preventDefault();
    const post_id = document.querySelector('p[name="post-id"]').textContent;
    const comment_text = document.querySelector('textarea[name="comment-content"]').value.trim();
    //const user_id = req.session.user.user_id;
    //console.log(post_id, )
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ post_id, comment_text }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
});
//leaveComment.addEventListener
