import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [user, setUser] = useState(null);
    const isLoggedIn = !!token;

    const storeToken = (serverToken) => {
        setToken(serverToken);
        localStorage.setItem("token", serverToken);
    };

    const storeGoogleUser = (googleUserData) => {
        setUser(googleUserData);
        localStorage.setItem("googleUser", JSON.stringify(googleUserData));
    };

    const logOutUser = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("googleUser");
        setToken("");
        setUser(null);
    };

    useEffect(() => {
        const storedGoogleUser = localStorage.getItem("googleUser");
        if (storedGoogleUser) {
            setUser(JSON.parse(storedGoogleUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ storeToken, storeGoogleUser, logOutUser, isLoggedIn, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const AuthContextValue = useContext(AuthContext);
    if (!AuthContextValue) {
        throw new Error("useAuth used outside of the provider");
    }
    return AuthContextValue;
};
