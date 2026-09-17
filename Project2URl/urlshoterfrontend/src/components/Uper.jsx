import axios from "axios";
import React, { useState } from "react";

const Uper = ({  setUrl,currentUrl, setCurrentUrl }) => {
  const [formValue, setFormValue] = useState({
    url: "",
  });
 
  const handleChange = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5173/api/url", formValue);

      console.log(res.data);
      const data = res.data.data;
      setUrl((prev) => [...prev, res.data.data]);
      setCurrentUrl(`http://localhost:3000/${data.shortCode}`);
      console.log(formValue);
    } catch (error) {
      console.log(error);
    }

    setFormValue({
      url: "",
    });
  };

  return (
    <div className="min-h-[55vh] bg-gradient-to-br from-[#eef4ff] via-[#f8fbff] to-[#e0ecff] flex items-center justify-center px-4 py-14">
      <div className="w-full max-w-4xl text-center">
        <p className="text-blue-600 font-semibold text-sm md:text-base mb-3">
          Simple. Fast. Reliable.
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
          Turn long URLs into
          <span className="text-blue-600"> short links.</span>
        </h1>

        <p className="mt-4 text-sm md:text-lg text-slate-500">
          Paste your long link below and get a clean, shareable short URL
          instantly.
        </p>

        <form
          className="mt-9 flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto"
          onSubmit={handleSubmit}>
          <input
            name="url"
            value={formValue.url}
            onChange={handleChange}
            type="text"
            placeholder="Paste your long URL here..."
            className="flex-1 h-14 px-5 rounded-xl bg-white border border-blue-100 text-slate-800 outline-none shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="h-14 px-7 cursor-pointer active:scale-95 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 shadow-md">
            Shorten URL
          </button>
        </form>

        {/* Hardcoded Short URL */}
        <div className="mt-6 max-w-3xl mx-auto bg-white border border-blue-100 rounded-xl p-4 shadow-sm text-left">
          <p className="text-sm text-slate-500 mb-2">Your shortened URL</p>

          <div className="flex items-center justify-between gap-3">
            <p className="text-blue-600 font-medium truncate">
              <a href={currentUrl} target="_blank" rel="noreferrer">
                {currentUrl}
              </a>
            </p>

            <button
              type="button"
              className="shrink-0 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 cursor-pointer">
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uper;
