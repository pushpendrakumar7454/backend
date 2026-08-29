import { useEffect, useState } from "react";
import { deleteNote, getNotes } from "../api/notesApi";
import NotesForm from "../components/NotesForm";
import NotesUi from "../components/NotesUi";

const Main = () => {

    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState({
    title:"",
    description:""
})
const [updateNotes, setUpdateNotes] = useState(null)
    

    const getNote = async () => {
        try {
            const res = await getNotes();
            setNotes(res);
          
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getNote();
    }, []);



    const deleteData=async(id)=>{
        try {
            await deleteNote(id)
            setNotes((prev)=>prev.filter((value)=>value._id!==id))
        } catch (error) {
            console.log(error)
        }
    }


    const updateData=(note)=>{
        console.log(note)
        setUpdateNotes(note._id)
        setFormData({
            title:note.title,
            description:note.description
        })
    }
    return (
        <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-10">

            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">

                {/* Notes Form */}
                <div className="w-full lg:w-[45%]">
                    <NotesForm  setNotes={setNotes} formData={formData} setFormData={setFormData} updateNotes={updateNotes} setUpdateNotes={setUpdateNotes}/>
                </div>

                {/* Notes UI */}
                <div className="w-full lg:w-[55%]">

                    {notes.map((note) => {
                        return (
                            <NotesUi
                                key={note._id}
                                note={note}
                                deleteData={deleteData}
                                updateData={updateData}
                            />
                        );
                    })}

                </div>

            </div>
        </div>
    );
};

export default Main;