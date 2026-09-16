
import React, { useEffect } from 'react'
import { useUrl } from '../context/UrlContext'
import { apiInstance } from '../config/apiInstance'

const Down = () => {

    const { url, setUrl } = useUrl()

    const getUrl = async () => {
        try {
            const res = await apiInstance.get("/url/find")

            console.log(res.data)

            setUrl(res.data.data.urls)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUrl()
    }, [])

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-6">

            <h2 className="text-2xl font-bold text-gray-900 mb-5">
                Your links ({url.length})
            </h2>

            {url.map((item, index) => (

                <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between mb-4 shadow-sm"
                >

                    <div className="text-orange-600 font-semibold text-lg">
                        {item.shortCode}
                    </div>

                    <div className="flex items-center gap-5">

                        <span className="text-gray-600 text-sm">
                            {item.clicks} clicks
                        </span>

                        <span className="text-gray-600 text-sm">
                            {item.createdAt}
                        </span>

                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl">
                            Copy
                        </button>

                        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl">
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>
    )
}

export default Down


