const { Post } = require("../models");

exports.renderDashboard = async (req, res, next) => {
  try {
      const posts = await Post.findAll();
      const plainPosts = posts.map((post) => post.get({ plain: true }));

      //console.log("Logged In Status: ", req.session.logged_in);
      res.render("dashboard", {
          isLoggedIn: req.session.logged_in === true,
          posts: plainPosts
      });
  } catch (err) {
      next(err);
  }
};



// exports.createPost = async (req, res, next) => {
//     try {
//       // Retrieve the post data from the request body
//       const { title, post_content } = req.body;

//       // Create the post using the post model
//       const newPost = await Post.create({
//         title,
//         post_content,
//       });

//       // Redirect to the dashboard after creating the post
//       res.redirect('/dashboard');
//     } catch (err) {
//       next(err);
//     }
//   };
