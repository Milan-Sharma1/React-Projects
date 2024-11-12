import { useState, useCallback, useEffect, useRef } from 'react'
import { Toaster, toast } from "sonner";
function App() {
  const passwordRef = useRef(null)
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charALlowed, setcharALlowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    else if(charALlowed) str += "!@#$%^&*()_+"
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
      
    setpassword(pass)
  }, [length, numberAllowed, charALlowed, setpassword])

  useEffect(() => {
    passwordGenerator()
  }, [length,numberAllowed,charALlowed,passwordGenerator])
  
  return (
    <div className='h-60 w-full mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-4xl text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-6'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button className='text-white p-3 bg-blue-600' onClick={()=>{
          passwordRef.current?.select()
          window.navigator.clipboard.writeText(password)
          toast.success("Copied To Clipboard" )
          // alert("Copied To Clipboard")
        }}>Copy</button>

    </div>
      <div className='flex text-sm gap-x-2'>
        <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
        />
        <label htmlFor="">Length: {length}</label>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="checkbox"
          defaultChecked={numberAllowed}
          onChange={()=>{setnumberAllowed((prev) => !prev);//reverse the previous value
          }}
        />
        <label htmlFor="">Number Allowed</label>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input type="checkbox"
        onChange={()=>{
          setcharALlowed((prev)=>!prev);
        }}
        />
        <label htmlFor="">Characters</label>
      </div>
      <Toaster />
    </div>
  )
}

export default App
