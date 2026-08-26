import React from "react";
import { deleteNotes, updateNotes } from "../api/noteHooks";

const NotesUi = ({value,setNotes, setformData, setupdateNote}) => {

    const handleDelete=async()=>{
        try { 
            await deleteNotes(value._id)
           setNotes((prev)=>prev.filter((note)=>note._id!==value._id))
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate=(note)=>{
      setupdateNote(note._id)
      setformData({
        title:note.title,
        description:note.description

      })
      
    }

  return (
    <div className="w-full p-4 sm:p-6">
      <div className="group w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-indigo-500/10 sm:p-6">

        {/* Top */}
        <div className="mb-4">
          <h2 className="line-clamp-2 text-lg font-bold text-white sm:text-xl">
           {value.title}
          </h2>
        </div>

        {/* Description */}
        <p className="line-clamp-4 text-sm leading-6 text-slate-400 sm:text-[15px]">
         {value.description}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex gap-3 border-t border-white/10 pt-4">

          <button
          onClick={()=>handleDelete()}
            type="button"
            className="flex-1 cursor-pointer active:scale-95 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-400 transition-all duration-200 hover:bg-red-500 hover:text-white"
          >
            Delete
          </button>

          <button
          onClick={()=>handleUpdate(value)}
            type="button"
            className="flex-1 rounded-xl border border-indigo-500/20 bg-indigo-500/10 px-4 py-2.5 text-sm font-medium text-indigo-400 transition-all duration-200 hover:bg-indigo-500 hover:text-white"
          >
            Update
          </button>

        </div>

      </div>
    </div>
  );
};

export default NotesUi;