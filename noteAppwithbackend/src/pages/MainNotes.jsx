import React, { useEffect, useState } from "react";
import NotesForm from "../components/NotesForm";
import NotesUi from "../components/NotesUi";
import { getNotes } from "../api/noteHooks";

const MainNotes = () => {

    const [notes, setNotes] = useState([])
    const fetchData=async()=>{
        try {
            const res=await getNotes()
            setNotes(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
       fetchData()
    },[])


  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">

        {/* Notes Form */}
        <div className="w-full lg:w-[45%]">
          <NotesForm setNotes={setNotes}/>
        </div>

        {/* Notes UI */}
        <div className="w-full lg:w-[55%]">
         {notes?.map((value)=>{
            return <NotesUi key={value.id} value={value} setNotes={setNotes}/>
         })}
        </div>

      </div>
    </div>
  );
};

export default MainNotes;