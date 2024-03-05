import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token , setToken] = useState(localStorage.getItem("token") || "");
    const [user , setUser] = useState(null);
    const [events , setEvents] = useState([]);
    const isLoggedIn = !!token;
    console.log("user logged in : ", isLoggedIn);

    const storeToken = (serverToken) => {
        console.log("Server token:", serverToken);
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
      };

    const logOutUser = () => {
        localStorage.removeItem("token");
        setToken("");
    }

    const getUserData = async () =>{
        try {
            const response = await fetch("http://localhost:7000/api/user", {
                method : "GET",
                headers : {
                    authorization : token
                }
            });
            if (response.ok) {
                const responseData = await response.json();
                setUser(responseData.data);
                console.log("response user data : ", responseData);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("get user data error : " , error);
        }
    };
    // const getAllEvents = async () =>{
    //     try {
    //         const response = await fetch("http://localhost:7000/api/events", {
    //             method : "GET",
    //             headers : {
    //                 "Content-Type" : "application/json"
    //             }
    //         });
    //         if (response.ok) {
    //             const responseData = await response.json();
    //             setEvents(responseData.data);
    //             console.log("Events data : ", responseData.data);
    //         }
    //     } catch (error) {
    //         console.error("Events error : ", error);
    //     }
    // }

    useEffect(() =>{
        if (isLoggedIn) {
            getUserData();
            // getAllEvents();
        }
       setUser(null);
    },[])

    return (
        <AuthContext.Provider value={{storeToken,logOutUser, isLoggedIn, user, events}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);

    if (!AuthContextValue) {
        throw new Error ("useAuth used outside of the provider");
    }
    return AuthContextValue;
}