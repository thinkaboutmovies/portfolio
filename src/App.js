import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';


function App() {
  return (
    <div >
      <nav>
        <ul class='main'>
          <li> <a href="#Home">Home</a> </li>
          <li> <a href="#About">About Me</a> </li>
          <li> <a href="#Skills">Skills</a> </li>
          <li> <a href="#Contact">Contact Info</a> </li>
          <li> <a href="#Projects">Projects</a> </li>
          <li> <a href="#Resume">Resume</a> </li>
        </ul>
      </nav>
      <main>
        <About></About>
        <Contact></Contact>
        <Home></Home>
        <Projects></Projects>
        <Resume></Resume>
        <Skills></Skills>
      </main>
    </div>
  );
}

export default App;
