
import './App.css';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/services' element={<Services/>}></Route>
          <Route exact path='/products' element={<Products/>}></Route>
          <Route exact path='/sign-up' element={<SignUp/>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
