import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';

function App() {


  return (
    <>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/user' element={<UserPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
