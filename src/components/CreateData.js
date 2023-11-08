'use client'
import React,{useState} from 'react'

const CreateData = ({saveData}) => {
    //const db = new Database('database/mydatabase.db', { verbose: console.log });

    const [name,setName] = useState();
    const [position,setPosition] = useState(); 

    const save = () => {
        if(saveData(name,position)){
             
            setName('');
            setPosition('');

        }

 
    }
    
  return (
    <div className='h-screen flex justify-center items-center'>

                <div className='flex flex-col gap-2'>
                <div>
                    <input placeholder='Name' className=' px-3 h-14 w-72 border' type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div>
                    <input placeholder='Position' className=' px-3 h-14 w-72 border' type='text' value={position} onChange={(e)=>setPosition(e.target.value)}/>
                </div>

                <button onClick={()=>save()} className='h-14 bg-green-500 w-72 text-white cursor-pointer'>Save</button>
                </div>

         </div>
  )
}

export default CreateData