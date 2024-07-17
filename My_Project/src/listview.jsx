import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Listview = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="card-container">
      {posts.map(post => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/post/1`}>
            <button type="button">Show more</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Listview;