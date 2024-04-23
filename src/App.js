import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import People from './pages/People';
import NavBar from './components/Navbar';
import Films from './pages/Films';
import Planets from './pages/Planets';

function App() {
  return (
    <div className="flex flex-col items-center">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path='/films' element={<Films/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/planets' element={<Planets/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
