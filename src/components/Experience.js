import React from 'react';
import './Experience.css';
const Experience = () => {
  const experiences = [
    {
      title: 'Web Development',
      company: 'Exposys DataLabs',
      content: ' During my internship at Exposys Datalabs, I had the opportunity to work on an innovative project focused on developing a mass mail dispatcher application. The project aimed to streamline communication processes within the organization by providing a robust and efficient platform for sending bulk emails to clients and stakeholders',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Nodemailer (EmailJS)'],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Oasis Infobyte',
      content: ' During my internship at Oasis Infobyte, spanning a duration of one and a half months, I delved deep into the realm of machine learning (ML) models and their initialization techniques. Through hands-on projects and mentorship, I gained practical experience in implementing various ML models, honing my skills in model selection, optimization, and evaluation.This hands-on experience not only strengthened my understanding of ML fundamentals but also enhanced my proficiency in Python programming and data manipulation libraries such as NumPy, Pandas, and Scikit-learn',
      technologies: ['NumPy', 'Pandas', 'Scikit-learn'],
    },
    {
      title: 'Java Intern',
      company: 'Oasis Infobyte',
      content: 'The internship experience at Oasis Infobyte provided me with invaluable exposure to Java development practices and equipped me with essential skills and competencies for a career in software engineering .I gained practical insights into the software development lifecycle and honed my abilities to work effectively in a professional team environment.',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL'],
    },
    {
        title: 'Cloud Services - Eduskills(Virtual)',
        company: 'AICTE',
        content: 'Contributed to AWS platform operations, specializing in EC2 instance provisioning and S3 bucket configuration.Collaborated with the team to optimize costs and performance efficiency through AWS resource monitoring.',
        technologies: ['Node.js', 'Express.js', 'MongoDB', 'Nodemailer (EmailJS)'],
      },
  ];

  return (
    <div className="experience-container" id="exp">
     
      
      {experiences.map((experience, index) => (
        <div key={index} className="experience-box">
          <h3>{experience.title}</h3>
          <h4>{experience.company}</h4>
          <p>{experience.content}</p>
          <h4>Technologies Used</h4>
          <ul className="experience-technologies">
            {experience.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;