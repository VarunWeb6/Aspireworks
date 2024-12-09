import React from "react";
import "./Program.css"; // Import the CSS file for styling

// Define the array of programs dynamically with descriptions
const programs = [
  { id: 1, title: "Python Developer", link: "https://forms.google.com/your-link", description: "Learn Python fundamentals and build real-world projects." },
  { id: 2, title: "Java Developer", link: "https://forms.google.com/your-link", description: "Master Java and develop enterprise-level applications." },
  { id: 3, title: "Web Designer", link: "https://forms.google.com/your-link", description: "Explore UI/UX design and create stunning websites." },
  { id: 4, title: "Data Analyst", link: "https://forms.google.com/your-link", description: "Analyze data effectively using modern tools and techniques." },
  { id: 5, title: "AI/ML", link: "https://forms.google.com/your-link", description: "Dive into machine learning concepts and AI development." },
  { id: 6, title: "Cybersecurity Expert", link: "https://forms.google.com/your-link", description: "Learn strategies to protect networks and systems from cyber threats." },
];

export const Program = () => {
  return (
    <>
      <div id="program" className="program-section">
        <h2 className="section-title">Available Programs</h2>
        <div className="card-container">
          {programs.map((program) => (
            <div className="program-card" key={program.id}>
              <h3>{program.title}</h3>
              <p className="program-description">{program.description}</p>
              <a href={program.link} target="_blank" rel="noopener noreferrer">
                <button className="join-btn">Join Program</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
