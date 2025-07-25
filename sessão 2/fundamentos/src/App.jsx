import { useState } from 'react'
// css
import './App.css'
// Componentes
import FirstComponent  from './components/FirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos</h1>
      <FirstComponent/>
    </>
  )
}

export default App
