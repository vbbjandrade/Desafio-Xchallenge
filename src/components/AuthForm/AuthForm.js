import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { FlipButton, FlipBackButton } from './FlipButtons/FlipButtons.js';
import { Typography } from '@material-ui/core';
import { ConnectedLoginForm, ConnectedRegisterForm } from './FormsContainer/FormsContainer.js';

function AuthForm(){
    const location = useLocation();
    return(
    <>
        <Routes>
            <Route path="*" element={<Typography variant="h6" gutterBottom>Faça seu login</Typography>}/>
            <Route path="/register" element={<Typography variant="h6" gutterBottom>Cadastre-se</Typography>}/>
        </Routes>

        <Routes>
            <Route path="*" element={<FlipButton/>}/>
            <Route path="/register" element={<FlipBackButton/>}/>
        </Routes>

        <Routes location={location}>
            <Route path="*" element={<ConnectedLoginForm/>}/>
            <Route path="/register" element={<ConnectedRegisterForm/>}/>
        </Routes>

    </>

    );
}

function AuthFormWrapper(){
    return(
        <Router>
            <AuthForm/>
        </Router>
    )
}

export default AuthFormWrapper;