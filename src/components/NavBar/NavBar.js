import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../context/LoginContext';


function NavBar() {

    const { user, logout } = useLoginContext()

    return (
        <div>
            <Box>
                <AppBar position="fixed">
                    <Toolbar sx={{ m: 2 }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mx: 10 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Link to='/'><img src='./assets/logo_puppis.png' height="50px" alt="logo" /></Link>
                        <Link to='/productos/alimento'><Typography color="#fff" variant="h6" sx={{ mx: 15 }}>
                            Alimento
                        </Typography></Link>
                        <Link to='/productos/comederos'><Typography color="#fff" variant="h6" sx={{ mx: 15 }}>
                            Comederos
                        </Typography></Link>
                        <Link to='/productos/shampoo'><Typography color="#fff" variant="h6" sx={{ mx: 15 }}>
                            Shampoo
                        </Typography></Link>
                        <CartWidget />
                        
                        <small>Bienvenido: {user.user}</small>
                        <Button onClick={logout} variant="contained" color="success" sx={{ mx: 2 }}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default NavBar;
