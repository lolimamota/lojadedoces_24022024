import { useState } from 'react'
import './App.css'
import Routes from './Components/Router/Routes.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter/>
    </>
  )
}

export default App
