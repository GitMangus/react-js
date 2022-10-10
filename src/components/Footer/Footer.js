import { Box, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import './Footer.css';

const Footer = () => {

    const current = new Date();
    const date = `${current.getFullYear()}`;

    return (
        <div>
            <Box p={{ lg: 5 }} className="footer__bg">
                <Container>
                    <Grid container spacing={10}>
                        <Grid item>
                            <img src='../../assets/logo_puppis.png' alt='logo' className='footer__logo' />
                            <img src='../../assets/award.png' alt='award' className='footer__award' />
                        </Grid>
                        <Grid item>
                            <Box>
                                <h5><strong>Nosotros</strong></h5>
                            </Box>
                            <Box>
                                <Typography>Sobre Nosotros</Typography>
                            </Box>
                            <Box>
                                <Typography>Sucursales</Typography>
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box>
                                <h5><strong>Servicios</strong></h5>
                            </Box>
                            <Box>
                                <Typography>Peluquería</Typography>
                            </Box>
                            <Box>
                                <Typography>Veterinaria</Typography>
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box>
                                <h5><strong>Contacto</strong></h5>
                            </Box>
                            <Box>
                                <Typography>
                                    Atención Teléfonica:
                                    0810-220-2345
                                </Typography>
                                <Typography>
                                    Atención Whatsapp:
                                    +54-911-6702-6320
                                </Typography>
                                <Typography>
                                    Lunes a Sábados de 9 a 21 hs
                                    Domingos de 10 a 20 hs
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center">
                        Todos los derechos reservados &reg; {date}
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Footer