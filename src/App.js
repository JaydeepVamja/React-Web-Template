import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Popup from './components/Popup';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
