import React from 'react'

const Upper = () => {
  return (
    <div className="w-full bg-[#faf7f2] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-[#202020]">
          Long links? Chhota kar do.
        </h1>

        <p className="mt-3 text-base md:text-lg text-gray-500">
          Paste a link, get a short one, see how many people clicked it.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Paste a long URL here..."
            className="flex-1 h-12 px-4 rounded-xl border border-gray-200 bg-white text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            className="h-12 px-7 rounded-xl bg-[#e86f2d] text-white font-medium hover:bg-[#d96021] transition"
          >
            Shorten
          </button>
        </div>

      </div>
    </div>
  )
}

export default Upper
