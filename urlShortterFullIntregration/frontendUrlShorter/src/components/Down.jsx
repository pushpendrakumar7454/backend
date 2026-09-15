import React from 'react'

const Down = () => {
    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-6">

            <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Your links (2)
            </h2>

            {/* First Link */}
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between mb-4 shadow-sm">

                <div className="text-orange-600 font-semibold text-lg">
                    http://localhost:3000/4Cu5YL
                </div>

                <div className="flex items-center gap-5">

                    <span className="text-gray-600 text-sm">
                        2 clicks
                    </span>

                    <span className="text-gray-600 text-sm">
                        11 Sept 2026
                    </span>

                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl">
                        Copy
                    </button>

                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl">
                        Delete
                    </button>

                </div>
            </div>

            {/* Second Link */}
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between shadow-sm">

                <div className="text-orange-600 font-semibold text-lg">
                    http://localhost:3000/EWZcTh
                </div>

                <div className="flex items-center gap-5">

                    <span className="text-gray-600 text-sm">
                        2 clicks
                    </span>

                    <span className="text-gray-600 text-sm">
                        11 Sept 2026
                    </span>

                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl">
                        Copy
                    </button>

                    <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl">
                        Delete
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Down