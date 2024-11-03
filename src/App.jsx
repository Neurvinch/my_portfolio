import Hero from '../src/sections/Hero.jsx';
import About from '../src/sections/About.jsx';
import Footer from '../src/sections/Footer.jsx';
import NavBar from '../src/sections/NavBar.jsx';
import Contact from '../src/sections/Contact.jsx';
import Clients from '../src/sections/Clients.jsx';
import Projects from '../src/sections/Projects.jsx';
import WorkExperience from '../src/sections/Experience.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
