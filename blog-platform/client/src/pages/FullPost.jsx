import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function FullPost() {
  const { date } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('/api/post/' + date).then(res => setPost(res.data));
  }, [date]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content}</p>
    </div>
  );
}
