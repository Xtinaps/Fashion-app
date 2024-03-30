import logo from './logo.svg';
import './App.css';
import FashionHome from './components/FashionHome';
import FashionArrival from './components/FashionArrival';
import FashionJewellary from './components/FashionJewellary';
import FashionOrder from './components/FashionOrder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<FashionHome/>}/>
        <Route path='/arrival' element={<FashionArrival/>}/>
        <Route path='/jewel'element={<FashionJewellary/>}/>
        <Route path='/order' element={<FashionOrder/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
