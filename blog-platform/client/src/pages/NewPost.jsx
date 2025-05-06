import React, { useState } from 'react';
import axios from 'axios';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/post', { title, date, content });
      alert('Post created');
    } catch (err) {
      alert('Error creating post');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
      <input type='date' value={date} onChange={e => setDate(e.target.value)} />
      <textarea placeholder='Content' value={content} onChange={e => setContent(e.target.value)} />
      <button type='submit'>Create Post</button>
    </form>
  );
}
