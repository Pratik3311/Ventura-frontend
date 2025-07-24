
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import IpoDetailsPage from './Pages/ipoDetailsPage'


function App() {
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ipo/:id' element ={<IpoDetailsPage />} />
    </Routes>
    
    </BrowserRouter>
    
  )
}

export default App
