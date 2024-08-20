import './App.css'
import Greeting from "./Greeting"
import { useState ,useRef,useEffect} from 'react'

function App() {
   const [name,setName]=useState('')
   const inpurtRef =useRef()
 
  
 return (
    <div style={{padding:"50px"}}>
      <input type="text" ref={inpurtRef} value={name} onChange={(e)=>setName(e.target.value)}/>
      {/* <button onClick={focus}>focus</button> */}
     
    </div>
 )
}

export default App