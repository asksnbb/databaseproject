import React from 'react'
import CreateData from '@/components/CreateData';
import Database from 'better-sqlite3';
import { redirect } from 'next/navigation'


export default function page() {
    
    async function saveData(name,position) {
        "use server";
        console.log(name,position);
        const db = new Database('database/mydatabase.db', { verbose: console.log });
        const newExpense = db.prepare('INSERT INTO emp (id, name) VALUES (?, ?)');
       const savedData = newExpense.run(name,position);
       redirect('/');
      }

  return (


    
         <CreateData saveData={saveData}/>
    


  )
};

