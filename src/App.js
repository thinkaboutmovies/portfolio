import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div id='App-Container'>
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
