import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Projects from "./components/Projects/Projects";
import './assets/styles/main.scss'
import SkillsComponent from './components/Skills/SkillsComponent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <SkillsComponent />
      <Projects />
    </div>
  )
}

export default App
