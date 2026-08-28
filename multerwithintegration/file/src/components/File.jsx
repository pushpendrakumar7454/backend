import axios from 'axios'
import React from 'react'
import { useForm} from "react-hook-form"
const File = () => {

const {register,handleSubmit}=useForm()
const submit=async(data)=>{
    console.log(data)
    const formData = new FormData()
    formData.append("name",data.name)
    formData.append("email",data.email)
    formData.append('image',data.image[0])

    await axios.post("http://localhost:3000/file",formData)
    console.log(formData)
}

  return (
    <div className='m-4 w-90 min-h-60 border-2 border-gray-700'>
      <form className='w-90  flex flex-col gap-8 p-5' onSubmit={handleSubmit(submit)}>
        <input {...register("name")} type="text" placeholder='Enter name...'className='border border-gray-600 p-3 text-xl rounded w-full' />
        <input {...register("email")} type="text" placeholder='Enter email... 'className='border border-gray-600 p-3 text-xl rounded w-full'/>
        <input {...register("image")} type="file" placeholder='enter File' className='border border-gray-600 p-3 text-sm rounded w-full' />
        <button className='bg-red-600 p-2 rounded text-white text-xl active:scale-95 cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default File
