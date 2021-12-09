import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      
      <main className='container content'>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
