import axios from "axios";
import React, { useEffect } from "react";

const Down = ({ url, setUrl,currentUrl }) => {

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5173/api/find");
      console.log(res.data.data);
      setUrl(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  const deleteUrl=async(id)=>{
    try {
        const res= await axios.delete(`http://localhost:5173/api/delete/${id}`)
        setUrl((prev)=>prev.filter((url)=>url._id!==id))
        console.log(res)
    } catch (error) {
        console.log(error)
    }
  }

  const handleCopy = async () => {
  await navigator.clipboard.writeText(currentUrl);
};

  return (
    <div className="bg-[#eef4ff] min-h-[45vh] px-4 py-10">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Your links {url.length}
        </h2>

        <div className="space-y-4">

          {url.map((item) => (

            <div
              key={item._id}
              className="bg-white border border-blue-100 rounded-2xl
              p-5 shadow-sm"
            >

              {/* URL CONTENT */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-5">

                {/* SHORT URL + ORIGINAL URL */}
                <div className="flex-1 min-w-0 space-y-2">

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">

                    <span className="text-xs font-semibold text-slate-500 uppercase w-24 shrink-0">
                      Short URL
                    </span>

                    <a
                      href={`http://localhost:3000/${item.shortCode}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 font-semibold hover:underline break-all"
                    >
                      {item.shortCode}
                    </a>

                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2">

                    <span className="text-xs font-semibold text-slate-500 uppercase  w-24 shrink-0">
                      Original
                    </span>

                    <a
                      href={item.orginalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-600 text-sm hover:text-blue-600 break-all truncate"
                    >
                      {item.orginalUrl}
                    </a>

                  </div>

                </div>

                {/* DATE + CLICKS */}
                <div className="flex sm:flex-row lg:flex-col gap-4 lg:w-32">

                  <div>
                    <p className="text-xs text-slate-400">
                      Clicks {item.clicks}
                    </p>

                  </div>

                  <div>
                    <p className="text-xs text-slate-400">
                      Created
                    </p>

                    <p className="text-sm text-slate-500">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="flex gap-3 lg:w-40">

                  <button
                    onClick={handleCopy}
                    className="flex-1 cursor-pointer active:scale-95 px-4 py-2.5 rounded-lg
                    bg-blue-600 text-white font-medium
                    hover:bg-blue-700 transition"
                  >
                    Copy
                  </button>

                  <button
                  onClick={()=>deleteUrl(item._id)}
                    className="flex-1 cursor-pointer active:scale-95 px-4 py-2.5 rounded-lg
                    bg-red-500 text-white font-medium
                    hover:bg-red-600 transition"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Down;