import React, { useRef } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function EmailField(){
    const isInitialMount = useRef(true);

    React.useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false;
        }
        else{
            if(values.email  === ''){
                setError(true)
                setEmailFormatValid(true)
            }
            else if(!(values.email.lastIndexOf("@") < values.email.lastIndexOf(".") &&
                values.email.lastIndexOf("@") > 0 &&
                values.email.lastIndexOf(".") > 2)){
                setEmailFormatValid(false);
            } else {
                setEmailFormatValid(true);
                setError(false);
            }
        }
    });

    const [values, setValues] = React.useState({
        email: ''
    });

    const [error, setError] = React.useState(false);
    const [emailFormatValid, setEmailFormatValid] = React.useState(true)

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return(
        <TextField 
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled" 
            id="email" 
            name="email"
            type="email" 
            label="E-mail"
            error={error || !emailFormatValid}
            helperText={!emailFormatValid ? "Formato inválido!" : error ? 'Campo vazio!' : ''}
            InputProps={
                {
                    value: values.email,
                    onChange: handleChange('email'),
                }
            }
            required>
        </TextField>
    );
}

function PasswordField(props){
    const isInitialMount = useRef(true);

    React.useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false;
        }
        else{
            if(props.repeat){
                setError(values.repassword === '' ? true : false);
            }else{
                setError(values.password === '' ? true : false);
            }
        }
    });

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        repassword: '',
        showRepassword: false
    });

    const [error, setError] = React.useState(false);
    const [passwordEqual, setPasswordEqual] = React.useState(false)

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };
    
    function handleClickShowPassword() {
        if(props.repeat){
            setValues({ ...values, showRepassword: !values.showRepassword });
        }
        else{
            setValues({ ...values, showPassword: !values.showPassword });
        }
    };
    
    return(
        <TextField 
            InputLabelProps={{
                shrink: true,
            }}
            variant="filled" 
            id={props.repeat ? "repassword" : "password"}
            name={props.repeat ? "repassword" : "password"}
            type={props.repeat ? (values.showRepassword ? 'text' : 'password') : (values.showPassword ? 'text' : 'password')}
            label={props.repeat ? "Repetir Senha" : "Senha"}
            error={error}
            helperText={error ? 'Campo vazio!' : ''}
            InputProps={
                {
                    value: props.repeat ? values.repassword : values.password,
                    onChange: props.repeat ? handleChange('repassword') : handleChange('password'),
                    endAdornment: 
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                }
            }
            required>
        </TextField>
    );
}

export { EmailField, PasswordField };