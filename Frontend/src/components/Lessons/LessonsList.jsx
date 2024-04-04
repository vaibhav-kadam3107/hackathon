import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'; // Import the CSS file

function LessonsList() {
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
      <div className="lessons-container">
        <div className="lesson-scroll">
          {filteredLessons.map(lesson => {
            const youtubeLink = lesson.video_link;
            const videoId = youtubeLink.split('v=')[1];
            return (
              <div key={lesson.id} className="lesson-box">
                <div className="thumbnail">
                  <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="Thumbnail" />
                </div>
                <div className="lesson-info">
                  <h2 className="lesson-title">{lesson.title}</h2>
                  <p className="lesson-description">{lesson.description}</p>
                  <div className="tags">
                    {lesson.tags.map(tag => (
                      <span key={tag} className="tag" onClick={() => handleSearch(tag)}>{tag}</span>
                    ))}
                  </div>
                  <a className="watch-video" href={lesson.video_link} target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LessonsList;
