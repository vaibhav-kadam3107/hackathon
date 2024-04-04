import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; // Import the CSS file

function HomePage() {
  const [lessons, setLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('lessons'); // State to keep track of active tab

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const filteredLessons = lessons.filter(lesson =>
    lesson.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="homepage">
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/VIDEO_ID_HERE" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
      <div className="content-container">
        <h1>Welcome to Stock Investment!</h1>
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search by tag..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="lessons-list">
          {filteredLessons.map(lesson => (
            <div key={lesson.id} className="lesson">
              <h2>{lesson.title}</h2>
              <p>{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
