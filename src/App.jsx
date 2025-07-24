
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import IpoPage from './Pages/IpoPage'




function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ipo/:id' element ={<IpoPage />} />
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
