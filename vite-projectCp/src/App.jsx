import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Component from './pages/Component';
import Components from './pages/Components';
import Templates from './pages/Templates';
import Websites from './pages/Websites';
import Services from './pages/Services';
import Admin from './pages/Admin';
import Sitebuilder from './pages/Sitebuilder';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import './App.css'

function App() {

  return (
    <Router>
      <Nav/>
      <main>
        <Routes>
          <Route path='/' element={<Components/>}/>
          <Route path='/components' element={<Components/>}/>
          <Route path='/components/:id' element={<Component/>}/>
          <Route path='/templates' element={<Templates/>}/>
          <Route path='/websites' element={<Websites/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/site-builder' element={<Sitebuilder/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/profile/:id' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </main>
    </Router>
  );
}

function FooterWrapper() {
  const location = useLocation();
  const shouldShowFooter = location.pathname !== '/site-builder';

  return shouldShowFooter ? <Footer /> : null;
}
export default App
