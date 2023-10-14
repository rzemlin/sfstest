import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sonic Speed Test</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
        <iframe src="https://broadbandnow.com/speedtest" title="Broadband Now Speed Test"></iframe>
        <iframe src="https://pcmag.speedtestcustom.com/" title="PC Mag Speed Test"></iframe>
        <iframe src="https://www.sonicspeedtest.com" title="Sonic Speed Test"></iframe>
        </p>
      </div>
      
    </>
  )
}

export default App
