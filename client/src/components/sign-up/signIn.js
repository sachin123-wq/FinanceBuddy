import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { validateEmail } from '../../helpers';

// ACTIONS 
import { login } from '../../actions/authActions';
import {
    setLoginEmail, setLoginPassword,
    setLoginValid, setLoginError
} from '../../actions/loginFormActions';

// COMPONENTS 
import { Button } from "../../common/button";


const SignIn = ({ showSignUp, onClose }) => {

    const dispatch = useDispatch()

    // STATES
    const formState = useSelector(state => state.loginForm)
    const signupState = useSelector(state => state.signupModal)

    // HANDLER FOR SUBMIT CLICK (SIGN IN)
    const handleSignInSubmit = async () => {
        if (!validateForm(formState, dispatch)) {
            return;
        }

        setLoginValid(true, dispatch);
        setLoginError('', dispatch);

        if (signupState.isCreator) {
            formState.isCreator = true
        }
        // TODO: use auth actions
        const { error } = await login(formState, dispatch);
        if (error) {
            setLoginError(error, dispatch)
            return;
        }
        // Put up modal
        onClose();
    }

    return (
        <div>
            <div className="header">Sign in</div>
            <div className="border-seperator "></div>
            {
                formState.error.length > 0
                && <div className="form-error">
                    {formState.error}
                </div>
            }
            <div className="row">
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    placeholder="Email"
                    onChange={e => setLoginEmail(e.target.value, dispatch)}
                    className={`modal-input ${(!formState.isValid && formState.email === "") && 'invalid'}`}
                />
            </div>
            <div className="row">
                <input
                    type="password"
                    name="password"
                    value={formState.password}
                    placeholder="Password"
                    onChange={e => setLoginPassword(e.target.value, dispatch)}
                    className={`modal-input ${(!formState.isValid && formState.password === "") && 'invalid'}`}
                />
            </div>

            <Button text="SIGN IN" onClick={handleSignInSubmit} />
            <div>
                <span>Don't have an account?</span>
                <span className="sign-in" onClick={showSignUp}>SIGN UP</span>
            </div>
        </div>
    )
}

// FORM VALIDATION
const validateForm = (formState, dispatch) => {
    if (formState.email === "" || formState.password === "") {
        setLoginValid(false, dispatch);
        return false;
    }
    if (!validateEmail(formState.email)) {
        setLoginError('Enter a valid email!', dispatch);
        return false;
    }
    return true;
}

export default SignIn
