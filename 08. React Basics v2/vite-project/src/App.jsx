import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log(`O conteúdo da página foi alterado.\nEstado da variável: ${num}`)
  }, [num])

  return (
    <>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Clique aqui</button>
    </>
  )
}

export default App