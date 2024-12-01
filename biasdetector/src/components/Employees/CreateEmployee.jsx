import { fetchPosts } from '../../services';

// Function to display the posts in the console or in HTML
function displayPosts(posts) {
  console.log(posts);
  
  return (
    <h1> posts </h1> )// You can replace this with displaying the posts in HTML
}

// Call fetchPosts and pass in the displayPosts function as a callback
fetchPosts(displayPosts);