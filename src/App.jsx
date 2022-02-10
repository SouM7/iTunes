import { useState } from 'react'
import logo from './logo.svg'
import Navbar from './Components/navbar'
import Spec2 from './Components/Spec2'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Spec2/> */}
      <Card/>
    </div>
  )
}

export default App
