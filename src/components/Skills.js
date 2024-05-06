import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaGit, FaPython, FaJs, FaPhp } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJs />, level: 'Expert' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 'Advanced' },
    { name: 'React', icon: <FaReact />, level: 'Advanced' },
    { name: 'PHP', icon: <FaPhp />, level: 'Intermediate' },
    { name: 'XML', icon: <FaJs />, level: 'Intermediate' },
    { name: 'Java', icon: <FaJava />, level: 'Expert' },
    { name: 'Python', icon: <FaPython />, level: 'Advanced' },
    { name: 'C', icon: <FaJs />, level: 'Intermediate' },
    { name: 'MongoDB', icon: <FaDatabase />, level: 'Advanced' },
    { name: 'FireStone', icon: <FaDatabase />, level: 'Intermediate' },
    { name: 'PostgreSQL', icon: <FaDatabase />, level: 'Intermediate' },
    { name: 'Neo4j', icon: <FaDatabase />, level: 'Beginner' },
    { name: 'Git', icon: <FaGit />, level: 'Expert' },
  ];

  const skillBoxes = skills.map((skill, index) => (
    <div key={index} className="skill-box">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-name">{skill.name}</div>
      <div className="skill-level">{skill.level}</div>
    </div>
  ));

  return (
    <div className="skills-container" id='skills'>
        <br></br>
      <h2 className='skills_content' id='skills1'>Skills</h2>
      <div className="skills-boxes">{skillBoxes}</div>
    </div>
  );
};

export default Skills;