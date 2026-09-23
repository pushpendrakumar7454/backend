
import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import useApi from "../config/apiInstance";

const Profile = () => {

    const { user, setUser } = useAuth();

    const api = useApi();

    const getData = async () => {

        try {

            const res = await api.get("/auth/me");

            console.log("ME RESPONSE:", res.data);

            setUser(res.data.data.user);

        } catch (error) {

            console.log("ME ERROR:", error);
            console.log("STATUS:", error.response?.status);
            console.log("DATA:", error.response?.data);

        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Name: {user?.name}</h1>

            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Profile;

