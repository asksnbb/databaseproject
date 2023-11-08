import React from 'react'
import Database from 'better-sqlite3';
const page = () => {

    const db = new Database('database/mydatabase.db', { verbose: console.log });
     const stmt = db.prepare('SELECT * FROM emp').all();
    


  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex flex-col'>

        
        {stmt.map((item)=>(
                <div key={item.id} className='flex flex-col'>
                  {item.id} - {item.name}
                </div>

        ))}
        </div>
    </div>
  )
}

export default page