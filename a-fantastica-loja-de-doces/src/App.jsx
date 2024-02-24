import { useState } from 'react'
import './App.css'
import AppRoutes from './Components/Router/Routes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>Pagina Inicial?</h1>
    <AppRoutes/>
    </div>
  )
}

export default App
