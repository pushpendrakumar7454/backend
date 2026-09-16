import React, { useEffect, useState } from 'react'
import { apiInstance } from '../config/apiInstance'
import { useUrl } from '../context/UrlContext'


const Down = () => {

const {url,setUrl}=useUrl()

    const getUrl = async () => {
        try {
            const res = await apiInstance.get("/url/find")

            console.log(res.data.data.urls)

            setUrl(res.data.data.urls)

        } catch (error) {
            console.log(error)
        }
    }


    const deleteUrl=async(id)=>{
        try{
            const res=await apiInstance.delete(`/url/delete/${id}`)
              
            console.log(res)

        setUrl((prev) => prev.filter((item) => item._id !== id))
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getUrl()
    }, [])

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">

            {/* Heading */}
            <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Your links
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                    Manage and track all your shortened links
                </p>
            </div>


            {/* Links */}
            <div className="space-y-4">

                {url.map((item) => (

                    <div
                        key={item._id}
                        className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition"
                    >

                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                            {/* URL Information */}
                            <div className="min-w-0 flex-1">

                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">
                                    Short URL
                                </p>

                                <a
                                    href={`http://localhost:3000/${item.shortCode}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-block text-orange-600 hover:text-orange-700 font-bold text-lg break-all"
                                >
                                    {item.shortCode}
                                </a>

                                <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mt-4 mb-1">
                                    Original URL
                                </p>

                                <p className="text-gray-600 text-sm truncate max-w-full">
                                    {item.orginalUrl}
                                </p>

                            </div>


                            {/* Stats */}
                            <div className="flex flex-wrap items-center gap-3">

                                <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 min-w-[100px]">
                                    <p className="text-xs text-gray-400">
                                        Clicks
                                    </p>

                                    <p className="text-lg font-bold text-gray-800">
                                        {item.clicks}
                                    </p>
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                                    <p className="text-xs text-gray-400">
                                        Created
                                    </p>

                                    <p className="text-sm font-semibold text-gray-700">
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </p>
                                </div>

                            </div>


                            {/* Buttons */}
                            <div className="flex gap-2">

                                <button
                                    className="flex-1 sm:flex-none border border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold px-5 py-2.5 rounded-xl transition"
                                >
                                    Copy
                                </button>

                                <button
                                onClick={()=>deleteUrl(item._id)}
                                    className="flex-1 sm:flex-none bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-xl transition"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* Empty State */}
            {url.length === 0 && (
                <div className="border border-dashed border-gray-300 rounded-2xl py-12 text-center">

                    <h3 className="text-lg font-semibold text-gray-700">
                        No links yet
                    </h3>

                    <p className="text-sm text-gray-400 mt-1">
                        Create your first short link to see it here.
                    </p>

                </div>
            )}
           
        </div>
    )
}

export default Down