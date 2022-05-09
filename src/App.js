import './App.css';
import About from './components/About';
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
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
