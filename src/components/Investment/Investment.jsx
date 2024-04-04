import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; // Import the CSS file

function Investment() {
  const [lessons, setLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/data');
      setLessons(response.data);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredLessons = lessons.filter(lesson =>
    lesson.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by tag..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container">
        {filteredLessons.map(lesson => (
          <div key={lesson.id} className="link-item">
            <h2 className="link-title">{lesson.title}</h2>
            <p className="link-description">{lesson.description}</p>
            <div>
              {lesson.tags.map(tag => (
                <span key={tag} className="tag" onClick={() => handleSearch(tag)}>{tag}</span>
              ))}
            </div>
            <a className="link-video" href={lesson.video_link}>
              Watch Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Investment;
