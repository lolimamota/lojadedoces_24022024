import { useState } from 'react'
import './App.css'
import AppRoutes from './Components/Router/Routes.jsx'
import Header from './Components/Header/Header.jsx'
import Home from './Components/Main/Home/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home>
    <h6>Pagina Inicial?</h6>
    <Header/>
    <AppRoutes/>
    </Home>
  )
}

export default App
