import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './components/pages/Home';
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
