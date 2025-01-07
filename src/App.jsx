import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import Hero from './components/custom/Hero'
import { Toaster } from './components/ui/toaster'



// maptilersdk.config.apiKey = 'IDtBjIGOJXqj0shlytbh';
// const map = new maptilersdk.Map({
//   container: 'map', // container's id or the HTML element to render the map
//   style: maptilersdk.MapStyle.STREETS,
//   center: [16.62662018, 49.2125578], // starting position [lng, lat]
//   zoom: 14, // starting zoom
// });
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Hero */}
      <Hero />

    </>
  )
}

export default App
