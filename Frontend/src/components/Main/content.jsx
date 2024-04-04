import React from 'react';
import './style.css'; // Import the CSS file

const AboutSection = () => {
  return (
    <main className="about-section-container">
      <section className="about-section">
        <header className="heading">
          <h1>Ready to take the first step towards financial empowerment?</h1>
          <h2>Join us at <span className="brand">INVEST-IQ</span> and kickstart your journey to a brighter financial future.</h2>
        </header>
        <section className="content">
          <p>Welcome to <span className="brand">[Your Website Name]</span>, where we're dedicated to empowering your financial journey through accessible resources and expert guidance. From understanding the importance of financial literacy to mastering budget management and diving into the world of investing, we offer practical insights tailored to your needs. Whether you're a beginner or seasoned investor, our platform provides the tools and support you need to make informed decisions and achieve your financial goals. Join our community of like-minded individuals, share insights, and learn from experts to embark on a path towards financial empowerment today.</p>
          <img className="banner-img" src="https://assets.entrepreneur.com/content/3x2/2000/1674448757-Hithere1.jpg?format=pjeg&auto=webp&crop=16:9&width=675&height=380" alt="Banner" />
          <img src="images/financeImg.jpg" alt="" />
        </section>

        <section className="content">
          <img className="illustration" src="https://www.chime.com/wp-content/uploads/2021/12/what-is-financial-literacy.png" alt="Illustration" />
          <p>Building your dream life can feel difficult if you’re burdened with debt, unable to cover unexpected emergencies, or feeling out of control with your finances. Financial literacy can help you approach your money as a tool to build the life you want rather than a burden that causes stress and overwhelm. 

Consider the following questions: 

How can I save money for unexpected expenses on a low income?
Is it better to buy or rent a home? 
How can I improve my credit score, and how will that help me? 
Can I be financially secure even if I don’t make much money?
How much do I need to save for retirement, and how can I start? 
Can everyday people invest in the stock market? 
These questions help shed light on the importance of financial literacy and why it matters in most parts of life. Without it,  you may spend more time worrying about how you’ll afford upcoming expenses or whether or not you’ll have enough saved to retire. </p>
        </section>

        {/* Features provided */}
        <section className="features">
          <header>
            <h3>Features:</h3>
          </header>
          <div className="feature-box-container">
            <article className="feature-box">
              <h4>Budget Management</h4>
              <p>Our platform provides comprehensive tools for managing your budget effectively. Track your expenses, set financial goals, and analyze your spending habits to achieve financial stability.</p>
            </article>
            <article className="feature-box">
              <h4>Investment Resources</h4>
              <p>Access a wealth of investment resources including articles, tutorials, and expert insights to help you make informed investment decisions. Stay updated with market trends and investment strategies.</p>
            </article>
            <article className="feature-box">
              <h4>Financial Lessons</h4>
              <p>Enroll in our financial education courses designed to enhance your financial literacy. Learn about key financial concepts, investment principles, and practical money management techniques.</p>
            </article>
            {/* Add more features as needed */}
          </div>
        </section>
      </section>
    </main>
  );
};

export default AboutSection;