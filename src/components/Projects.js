import React from 'react';
import './Projects.css';

import massMailImage from './images/mass_mail.jpeg';
import spamHamImage from './images/spam_ham.jpeg';
import schedule from './images/schedule.png';
import Face from './images/face.jpeg';
import bot from './images/Bot.jpeg';

const ProjectsContainer = () => {
  const projects = [
    {
      title: 'Mass Mail Dispatcher',
      image: massMailImage,
      description: 'As a full-stack developer, I have undertaken the development of a mass mail dispatcher application,leveraging my expertise in both frontend and backend technologies to create a comprehensive solution for efficient communication.',
      demoUrl: 'https://youtu.be/9wwdAE13pn8?feature=shared',
      githubUrl: 'https://github.com/MADDIPATIGOWTHAM/Exposys-datalabs'
    },
    {
      title: 'Spam Or Ham Detector',
      image: spamHamImage,
      description: 'A spam or ham detector is a vital tool in the realm of email filtering and text classification. It serves the purpose of distinguishing between legitimate (ham) and unwanted (spam) emails, thereby improving inbox management and enhancing user experience. The content of a spam or ham detector typically involves several key components:Data preprocessing,feature Extraction,model Selection,Evaluation.',
      demoUrl: 'https://www.youtube.com/watch?v=WvwjisBlOpk',
      githubUrl: 'https://github.com/MADDIPATIGOWTHAM/KAVACH'
    },
    {
      title: 'Sports Scheduler',
      image: schedule,
      description: 'Developed a web-based sports scheduling application using Postman for API testing and PostgreSQL as the backend database. The application aimed to streamline the scheduling process for sports events, allowing administrators to manage teams, venues, and match schedules efficiently.',
      demoUrl: 'https://www.youtube.com/watch?v=tEJSKjALD9c',
      githubUrl: 'https://github.com/MADDIPATIGOWTHAM/501'
    },
    {
        title: 'Facial Expression Detector',
        image: Face,
        description: 'Facial expression detection is a fascinating area within the field of computer vision and machine learning that involves recognizing and categorizing the facial expressions displayed by individuals in images or videos. This technology has a wide range of applications, from enhancing human-computer interaction to enabling emotion-aware systems in various domains such as healthcare, marketing, and entertainment.',
        demoUrl: 'https://youtu.be/AM55qkXdSGw?si=MBiTMDIwgwstdh7n',
        githubUrl: 'https://github.com/MADDIPATIGOWTHAM/facial-Expression-detector'
      },
      {
        title: 'Fully Functional Telegram Bot',
        image: bot,
        description: 'The Telegram bot successfully provide users with on-demand weather updates and comprehensive movie information directly within the Telegram platform. Received positive feedback from users for its intuitive interface and reliable functionality.',
        demoUrl: 'https://youtu.be/2MBFoTX4bhA',
        githubUrl: 'https://github.com/MADDIPATIGOWTHAM/Full_Stack'
      }
  ];
  
  
 

  return (
    <div className="projects-container" id="project">
      {projects.map((project, index) => (
        <div className="project-box" key={index}>
          <img src={project.image} alt={project.title} />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-container">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a><br></br>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Github</a>
            </div>
          </div>
        </div>
      ))}
    
                    
    </div>
  );
};



export default ProjectsContainer;
