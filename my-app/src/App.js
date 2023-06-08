
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}
export default App;
