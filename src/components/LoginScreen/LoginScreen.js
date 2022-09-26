import { Button, IconButton } from '@mui/material'
import React, { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import useForm from '../../hooks/useForm';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import './LoginScreen.css'


const LoginScreen = () => {

    const { login, user } = useContext(LoginContext)
    const { values, handleInputChange } = useForm({
        email: '',
        pass: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
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
                    <input
                        name="email"
                        type={'email'}
                        className='login__input'
                        value={values.email}
                        onChange={handleInputChange}
                    />

                    <label className='login__label'>Contraseña</label>
                    <input
                        name="pass"
                        type={'password'}
                        className='login__input'
                        value={values.pass}
                        onChange={handleInputChange}
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