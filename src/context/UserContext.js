import React, { createContext, useState, useEffect } from 'react';
import { check } from '../http/userAPI';

export const Context = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const logout = () => {
        localStorage.removeItem('token');
        setUser({});
        setIsAuth(false);
    };

    useEffect(() => {
        check()
            .then(data => {
                if (data) {
                    setUser(data);
                    setIsAuth(true);
                }
            })
            .catch(() => {})
            .finally(() => setLoading(false));
    }, []);

    return (
        <Context.Provider value={{
            user, setUser,
            isAuth, setIsAuth,
            loading, logout
        }}>
            {children}
        </Context.Provider>
    );
};