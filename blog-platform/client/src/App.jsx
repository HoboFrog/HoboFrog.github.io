import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewPost from './pages/NewPost';
import Home from './pages/Home';
import FullPost from './pages/FullPost';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/new' element={<NewPost />} />
        <Route path='/post/:date' element={<FullPost />} />
      </Routes>
    </Router>
  );
}
