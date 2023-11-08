import React from 'react'
import CreateData from '@/components/CreateData';
import Database from 'better-sqlite3';



export default function page() {
    
    async function saveData(name,position) {
        "use server";
        console.log(name,position);
        const db = new Database('database/mydatabase.db', { verbose: console.log });
        const newExpense = db.prepare('INSERT INTO emp (id, name) VALUES (?, ?)');
       const savedData = newExpense.run(name,position);
        if(savedData === 1){
            return true;
        }
        return false;
      }

  return (


    
         <CreateData saveData={saveData}/>
    


  )
};

