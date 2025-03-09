import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path='/edit/' element={<Edit />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
