import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route 
        element={<Container customClass="min_height" />}
        > 
          <Route path="/" element={<Home />} />    
          <Route path="/company" element={<Company />} />         
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/project" element={<Project />} />       
          <Route path="/newproject" element={<NewProject />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
