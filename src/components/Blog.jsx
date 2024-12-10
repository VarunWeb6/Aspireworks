import React from "react";
import "./Blog.css"; 

const blogs = [
  {
    id: 1,
    title: "Building Your First Web Application",
    description: "Learn how to build a dynamic web application with React and Node.js.",
    link: "#",
  },
  {
    id: 2,
    title: "Exploring AI Opportunities in Data Science",
    description: "How AI is revolutionizing real-world industries with data science.",
    link: "#",
  },
  {
    id: 3,
    title: "From Idea to Product: The Startup Journey",
    description: "Understanding the step-by-step journey of turning ideas into successful products.",
    link: "#",
  },
  {
    id: 4,
    title: "How to Land Your First Tech Job",
    description: "A guide for students and professionals entering the tech industry for the first time.",
    link: "#",
  },
  {
    id: 5,
    title: "Navigating Cybersecurity Threats in 2024",
    description: "Understanding how to tackle the growing number of cybersecurity challenges.",
    link: "#",
  },
  {
    id: 6,
    title: "Demystifying Blockchain for Beginners",
    description: "A simple guide to understanding blockchain technology and its applications.",
    link: "#",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <h1 className="blog-header">Blogs & Insights</h1>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
