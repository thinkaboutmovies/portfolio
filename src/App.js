import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div id='App-Container'>
      {/* <nav>
        <ul class='Main'>
          <li> <a href="#Home">Home</a> </li>
          <li> <a href="#About">About Me</a> </li>
          <li> <a href="#Skills">Skills</a> </li>
          <li> <a href="#Contact">Contact Info</a> </li>
          <li> <a href="#Projects">Projects</a> </li>
          <li> <a href="#Resume">Resume</a> </li>
        </ul>
      </nav> */}
      <main>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Contact></Contact>
        <Projects></Projects>
        
      </main>
    </div>
  );
}

export default App;
