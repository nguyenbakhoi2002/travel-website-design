import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div className="App">
      
      
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/services" exact element={<Services/>}/>
          <Route path="/products" exact element={<Products/>}/>
          <Route path="/sign-up" exact element={<SignUp/>}/>
        </Routes>
        
      
    </div>
  );
}

export default App;
