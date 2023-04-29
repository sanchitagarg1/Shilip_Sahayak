import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
  <>
   <Header />
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/home' element={<Home/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
  </>
  );
}

export default App;
