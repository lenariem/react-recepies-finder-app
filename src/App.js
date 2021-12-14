import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";
import Category from "./components/pages/Category.jsx";
import Recipe from "./components/pages/Recipe";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:name" element={<Category />}/>
            <Route path="/meal/:id" element={<Recipe />}/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
