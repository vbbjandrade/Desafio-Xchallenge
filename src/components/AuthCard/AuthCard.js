import React from 'react';
import { Container, Box, Paper, Typography, useMediaQuery } from '@material-ui/core';
import ImageComponent from '../ImageComponent/ImageComponent.js';
import styles from './AuthCard.module.css'; 
import AuthFormWrapper from '../AuthForm/AuthForm.js';

function AuthCard(){
    const small = useMediaQuery('(max-width:600px)');

    return(
        <Container maxWidth="md">
            <Paper elevation={small ? 0 : 3}>
                <Box className={styles.cardOrientation}>
                    <Box className={styles.imageBox}>
                        <ImageComponent
                            src="https://www.xtrategie.com.br/wp-content/uploads/2019/08/logo_xtrategie.png"
                        />
                    </Box>
                    <Box className={styles.formBox}>
                        <AuthFormWrapper/>
                    </Box>
                </Box>
            </Paper>
            <Typography variant="body1" gutterBottom style={{textAlign: "center", marginTop: "3em"}}>
                © Software Powered by Xtrategie
            </Typography>
            <Typography variant="body1" gutterBottom style={{textAlign: "center"}}>
                2009-2021
            </Typography>
        </Container>
    );
}

export default AuthCard;
