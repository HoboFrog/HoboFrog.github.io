import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts').then(res => setPosts(res.data));
  }, []);

  return posts.map(p => (
    <div key={p._id}>
      <h2>{p.title}</h2>
      <p>{new Date(p.date).toLocaleDateString()}</p>
      <p>{p.content.substring(0, 150)}...</p>
      <Link to={`/post/${p.date.split('T')[0]}`}>Read more</Link>
    </div>
  ));
}
