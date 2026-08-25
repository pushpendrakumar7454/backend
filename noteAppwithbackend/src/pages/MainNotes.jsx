import React from "react";
import NotesForm from "../components/NotesForm";
import NotesUi from "../components/NotesUi";

const MainNotes = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">

        {/* Notes Form */}
        <div className="w-full lg:w-[45%]">
          <NotesForm />
        </div>

        {/* Notes UI */}
        <div className="w-full lg:w-[55%]">
          <NotesUi />
        </div>

      </div>
    </div>
  );
};

export default MainNotes;