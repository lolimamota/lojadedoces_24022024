import { useState } from 'react'
import './App.css'
import AppRoutes from './Components/Router/Routes.jsx'
import Header from './Components/Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h6>Pagina Inicial?</h6>
    <Header/>
    <AppRoutes/>
    </div>
  )
}

export default App
