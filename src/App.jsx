import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Pages/Home'
import View from './Pages/View'
function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:id/view' element={<View />}></Route>
        </Routes>
      <Footer />
    </>
  )
}

export default App
