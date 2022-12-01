import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Firstpage() {
  const [txt, setTxt] = useState();
  const [valid, setValid] = useState();

  const handleclick= async ()=>{
    try {
      const rsp = await axios.post("http://localhost:5000/submit",{ txt })
      setValid(rsp.data)
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="m-20  ">
  <label htmlFor="success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Enter a Word</label>
  <input value={txt} onChange={(e)=>{
    setTxt(e.target.value)
    
  }} type="text" id="success" className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500" placeholder="Success input"/>
  <button onClick={handleclick} className="bg-transparent hover:bg-green-500 text-green-600 font-semibold hover:text-white py-2 px-4 mt-3 border border-green-500 hover:border-transparent rounded">
  Submit
</button>
  <p className="mt-2 text-sm text-green-600 dark:text-green-500">{valid?.msg}</p>
</div>
  )
}

export default Firstpage