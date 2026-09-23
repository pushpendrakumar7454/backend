import axios from "axios";

const apiInstance=axios.create({
    baseURL:"http://localhost:5173/api",
    withCredentials:true
})


const useApi=