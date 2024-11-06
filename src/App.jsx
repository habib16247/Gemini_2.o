import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import ContextProvider from './context/Context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar />
      <Main />
    </>
  )
}

export default App
