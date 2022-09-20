import { Button, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import './LoginScreen.css'

const LoginScreen = () => {

    const { login, user } = useContext(LoginContext)
    console.log(user)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login({
            email, pass
        })
    }

    return (
        <div className='login__div'>
            <div className='login__imagen'>
                <img src='../assets/imagen-login.webp' height="500px" alt="login" />
            </div>

            <div>
                <h1 className='login__title'>Bienvenido a Puppis</h1>

                <form className='login__formulario' onSubmit={handleSubmit}>
                    <label className='login__label'>Email</label>
                    <input type={'email'}
                        className='login__input'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <label className='login__label'>Contraseña</label>
                    <input type={'password'}
                        className='login__input'
                        value={pass}
                        onChange={handlePassChange}
                    />

                    {user.error && <small>{user.error}</small>}
                    <Button type='submit'
                        className='login__button'
                        variant="contained"
                    >Ingresar</Button>

                    <div className='login__icons'>
                        <IconButton className='login__icon'><FacebookIcon /></IconButton>
                        <IconButton className='login__icon'><GoogleIcon /></IconButton>
                        <IconButton className='login__icon'><InstagramIcon /></IconButton>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginScreen