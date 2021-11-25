import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../../../actions/actionCreators.js';
import { Button } from '@material-ui/core';
import { EmailField, PasswordField } from '../FormFields/FormFields.js';
import styles from '../AuthForm.module.css';

function LoginForm(props){
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({});

    function validateForm(data){
        let fields = data;
        console.log("Data Input Fields",fields);
        let errors = {};
        let formValid = true;
    
        if(!fields["email"]) {
            formValid = false;
            errors["email"] ="Não pode estar vazio!";
        }
    
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");
        
            if (
                !(
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                fields["email"].indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                fields["email"].length - lastDotPos > 2
                )
            ) {
                formValid = false;
                errors["email"] ="E-mail inválido!";
            }
        }
    
        if(!fields["password"]) {
            formValid = false;
            errors["password"] ="Não pode estar vazio!";
        }
    
        setErrors({ errors: errors });
        return formValid;
    }
    
    const onHandleLogin = (event) => {
        event.preventDefault();
    
        let email = event.target.email.value;
        let password = event.target.password.value;
    
        const data = {
            email, password
        };
    
        setFields(data)
    
        if(validateForm(data)){
            console.info('Valid Form!');
            props.dispatch(ActionCreators.loginAction(data));
        } else{
            console.log('Invalid Form!')
        }
    }
    
    return(
        <form id="loginForm" className={styles.formWrapper} onSubmit={onHandleLogin}>
            <EmailField />
            <PasswordField />
            <Button
                type="submit"
                form="loginForm"
                variant="outlined"
                color="primary"
            >
                ENTRAR
            </Button>
        </form>
    )
}

function RegisterForm(props){
    const [errors, setErrors] = useState({});
    const [fields, setFields] = useState({});

    function validateForm(data){
        let fields = data;
        console.log("Data Input Fields",fields);
        let errors = {};
        let formValid = true;
    
        if(!fields["email"]) {
            formValid = false;
            errors["email"] ="Não pode estar vazio!";
        }
    
        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");
        
            if (
                !(
                lastAtPos < lastDotPos &&
                lastAtPos > 0 &&
                fields["email"].indexOf("@@") === -1 &&
                lastDotPos > 2 &&
                fields["email"].length - lastDotPos > 2
                )
            ) {
                formValid = false;
                errors["email"] ="E-mail inválido!";
            }
        }
    
        if(!fields["password"]) {
            formValid = false;
            errors["password"] ="Não pode estar vazio!";
        }

        if(fields["repassword"] != fields["password"]){
            formValid = false;
            errors["repassword"] ="As senhas não coincidem!";
        }
    
        setErrors({ errors: errors });
        console.log("Erros",errors)
        return formValid;
    }
    
    const onHandleLogin = (event) => {
        event.preventDefault();
    
        let email = event.target.email.value;
        let password = event.target.password.value;
        let repassword = event.target.repassword.value;
    
        const data = {
            email, password, repassword
        };
    
        setFields(data)
    
        if(validateForm(data)){
            console.info('Valid Form!');
            props.dispatch(ActionCreators.registerAction(data));
        } else{
            console.log('Invalid Form!')
        }
    }
    return(
        <form id="loginForm" className={styles.formWrapper} onSubmit={onHandleLogin}>
            <EmailField />
            <PasswordField />
            <PasswordField repeat/>
            <Button
                type="submit"
                form="loginForm"
                variant="outlined"
                color="primary"
            >
                CADASTRAR
            </Button>
        </form>
    )
}

const mapStateToProps = (response) => ({
    response
})

const ConnectedLoginForm = connect(mapStateToProps)(LoginForm);
const ConnectedRegisterForm = connect(mapStateToProps)(RegisterForm);

export { ConnectedLoginForm, ConnectedRegisterForm };
