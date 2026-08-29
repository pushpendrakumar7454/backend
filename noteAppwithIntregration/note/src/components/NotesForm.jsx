import { useState } from "react";
import { createNote } from "../api/notesApi";




const NotesForm = ({setNotes}) => {
 

const [formData, setFormData] = useState({
    title:"",
    description:""
})


const handleChange=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
}

    const submitForm=async(e)=>{
        e.preventDefault()
       const res= await createNote(formData)
        setNotes((prev)=>[...prev,res.data])
        console.log(formData)
        setFormData({
            title:"",
            description:""
        })
    }

 


  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <svg
              className="w-6 h-6 text-indigo-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
              />
            </svg>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Create a New Note
          </h1>

          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Capture your thoughts and keep your ideas organized.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={submitForm}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl"
        >

          {/* Top Gradient */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

          <div className="p-5 sm:p-8">

            {/* Title */}
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block mb-2.5 text-sm font-semibold text-slate-200"
              >
                Title
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter your note title..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm sm:text-base text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 hover:border-white/20"
              />
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label
                  htmlFor="description"
                  className="text-sm font-semibold text-slate-200"
                >
                  Description
                </label>

                <span className="text-xs text-slate-500">
                  Your note
                </span>
              </div>

              <textarea
                id="description"
                name="description"
                rows="8"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write your thoughts, ideas or anything you want to remember..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-sm sm:text-base leading-6 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 hover:border-white/20"
              />
            </div>

            {/* Bottom Area */}
            <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">

              <p className="text-xs sm:text-sm text-slate-500">
                Keep your notes simple and organized.
              </p>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:bg-indigo-400 hover:-translate-y-0.5 active:translate-y-0"
              >
                Save Note

                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NotesForm;