import React from 'react'
import { createContext, useContext, useState } from "react";


export const LoginContext = createContext()

const usuarios = [
    {
        email: 'mandy@gmail.com',
        password: '123'
    },
    {
        email: 'billy@gmail.com',
        password: 'abc'
    }
]
export const LoginProvider = ({ children }) => {

    const [user, setUser] = useState({
        user: '',
        logged: false,
        error: ''
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true,
                    error: ''
                })
            } else {
                setUser({
                    user: '',
                    logged: false,
                    error: "Contraseña incorrecta"
                })
            }
        } else {
            setUser({
                user: '',
                logged: false,
                error: "Email incorrecto"
            })
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            error: ''
        })
    }

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}