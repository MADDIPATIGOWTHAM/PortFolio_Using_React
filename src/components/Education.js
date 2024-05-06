import React from 'react';
import './Education.css';
const EducationDetails = () => {
    const education = [
        {
          degree: 'Bachelor of Science in Computer Science',
          institution: 'Vishnu Institute Of Technology',
          location:'Bhimavaram',
          startYear: '2021',
          endYear: '2025',
          description: 'GPA: 9.26/10.0',
        },
        {
          degree: 'Intermediate(MPC)',
          institution: 'Narayana Junior College',
          location:'Vijayawada',
          startYear: '2019',
          endYear: '2021',
          description: '91%',
        },
        {
            degree: 'Secondary Education(SSC)',
            institution: 'Narayana High School',
            location:'Vijayawada',
            startYear: '2019',
            endYear: '2021',
            description: '9.7/10.0',
          },
      ];
  return (
    <div className="education-details" id="edu">
      
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <h3>{item.degree}</h3>
            <p>
              {item.institution}, {item.location} - {item.startYear} to {item.endYear}
            </p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationDetails;