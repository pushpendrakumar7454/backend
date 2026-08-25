import { apiInstance } from "../config/apiInstance";

export const createNotes = async (title, description) => {
    try {
        const res = await apiInstance.post("/notes/create", {
            title,
            description
        });

        console.log(res);
        

    } catch (error) {
        console.log(error);
    }
};