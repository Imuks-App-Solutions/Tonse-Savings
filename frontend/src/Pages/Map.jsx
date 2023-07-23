import { useState } from 'react'
import img5 from '../assets/image5.jpeg'
import img4 from '../assets/image4.jpeg'
import img3 from '../assets/image3.jpeg'
import img2 from '../assets/image2.jpeg'
import img1 from '../assets/image1.jpeg'
function App() {
  const [count, setCount] = useState(0)

  return (
<div className="App">
  <nav className="flex items-center py-4 px-8">
    <img src={img5} alt="" className="w-10 h-10 rounded-10" />
    <h1 className="text-blue text-xl font-bold">Hello, Dustin</h1>
  </nav>
  <p className="italic my-4">
    Answer the questions in chat, and we will find a tour based on your interests
  </p>
  <div className="App-text flex items-center justify-between px-8">
    <h2 className="text-2xl font-bold">Popular Tours</h2>
    <p className="text-blue">See All</p>
  </div>
  <div className="pic-thumbnail flex items-center justify-between px-8">
    <img src={img1} alt="" className=" rounded-t-lg rounded-b-lg w-1200" />
    <img src={img2} alt="" className="rounded-t-lg rounded-b-lg w-1200" />
    <img src={img3} alt="" className="rounded-b-lg rounded-t-lg w-1200" />
  </div>
  <div className="App-text2 flex items-center justify-between px-8">
    <h2 className="text-2xl font-bold">Based on your location</h2>
    <a
      href="https://maps.google.com"
      target="_self"
      className="text-blue font-bold"
    >
      See Map
    </a>
  </div>
  <div className="map w-96 h-60 mx-auto">
    <img src={img4} alt="" className="rounded-t-lg rounded-b-lg w-full" />
  </div>
</div>
  )
}

export default App
