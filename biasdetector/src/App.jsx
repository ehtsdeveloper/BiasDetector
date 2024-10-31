import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Musa from '../src/musaspage/musashoeb'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Musa></Musa>
    </>
  )
}

export default App
