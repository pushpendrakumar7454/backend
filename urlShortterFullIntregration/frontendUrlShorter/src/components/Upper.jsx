import React from 'react'
import { apiInstance } from '../config/apiInstance'
import { useUrl } from '../context/UrlContext'

const Upper = () => {
    const { formValue, setFormValue, setUrl } = useUrl()

    const handleChange = (e) => {
        setFormValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await apiInstance.post("/url/create", formValue)

        console.log(res.data.data.shortCode)

        setUrl((prev) => [...prev, res.data.data])
    }

    return (
        <div className="w-full bg-[#faf7f2] py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">

                <h1 className="text-4xl md:text-5xl font-bold text-[#202020]">
                    Long links? Chhota kar do.
                </h1>

                <p className="mt-3 text-base md:text-lg text-gray-500">
                    Paste a link, get a short one, see how many people clicked it.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">

                        <input
                            name="url"
                            value={formValue.url}
                            onChange={handleChange}
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
                </form>

            </div>
        </div>
    )
}

export default Upper