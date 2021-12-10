import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFoundPage from "./pages/NotFoundPage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      
      <main className='container content'>
        
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path = '/about' element={<About />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </BrowserRouter >
      </main>
      <Footer />
    </div>
  );
}

export default App;
