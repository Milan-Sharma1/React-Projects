import { useState } from 'react'
function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{backgroundColor: color}}
      >
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"Red"}} onClick={()=> setcolor("red")}>Red</button>
        <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}}  onClick={()=> setcolor("Green")}>Green</button>
        <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"Blue"}}  onClick={()=> setcolor("blue")}>Blue</button>
        <button className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"Black"}}  onClick={()=> setcolor("black")}>BLack</button>
        </div>
      </div>
    </>
  )
}

export default App
