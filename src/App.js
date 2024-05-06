import './App.css';
import Header from './components/Header.js';
import AboutMe from './components/aboutme.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Resume from './components/resume.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
     <Header/>
     <AboutMe/>
     <h2>Education Details</h2>
     <Education/>
     <Skills/>
     <h2 >Experience</h2>
     <Experience/>
     <h2>Projects</h2>
     <Projects/>
     <Resume/>
     <h2>Contact Me</h2>
     <Footer/>
    </div>
  );
}

export default App;
