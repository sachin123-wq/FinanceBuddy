import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

// VALIDATIONS
import {
    validateEmail, capitalizeFirstLetter
} from '../../helpers'

// ACTIONS
import { signupSubmit } from '../../actions/authActions';
import {
    setEmail, setName,
    setPassword, setValid,
    setError, setSuccessMsg
} from '../../actions/signupFormActions';

// COMPONENTS
import { Button } from "../../common/button";


const SignUp = ({ showSignIn, onClose }) => {

    const dispatch = useDispatch();

    // STATES
    const formState = useSelector(state => state.signupForm)

    // SUBMIT HANDLER 
    const handleSubmit = async () => {
        if (!validateForm(formState, dispatch)) {
            return;
        }

        setValid(true, dispatch);
        setError('', dispatch);

        const { error, success } = await signupSubmit(formState, dispatch);

        if (error) {
            setError(capitalizeFirstLetter(error), dispatch);
            return;
        }
        else if (success) {
            setSuccessMsg(capitalizeFirstLetter(success), dispatch)
            return;
        }
    }

    return (
        <div>
            <div className="header">Sign up</div>
            <div className="border-seperator "></div>
            {
                formState.error.length > 0
                && <div className="form-error">
                    {formState.error}
                </div>
            }
            {
                formState.successMsg.length > 0
                && <div className="form-success">
                    {formState.successMsg}
                </div>
            }

            <div className="row">
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value, dispatch)}
                    className={`modal-input ${(!formState.isValid && formState.name === "") && 'invalid'}`}
                />
            </div>
            <div className="row">
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value, dispatch)}
                    className={`modal-input ${(!formState.isValid && formState.email === "") && 'invalid'}`}
                />
            </div>
            <div className="row">
                <input
                    type="password"
                    name="password"
                    value={formState.password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value, dispatch)}
                    className={`modal-input ${(!formState.isValid && formState.password === "") && 'invalid'}`}
                />
            </div>

            <Button text="SIGN UP" onClick={handleSubmit} />

            <div>
                <span>Already have an account?</span>
                <span className="sign-in" onClick={showSignIn}>SIGN IN</span>
            </div>
            <div className="terms-text">
                <span>By continuing you accept the term of use and </span>
                <span
                    onClick={() => { }}
                    className="privacy-policy"
                >
                    privacy policy.
                </span>
            </div>

        </div>
    )
}

// FORM VALIDATION
const validateForm = (formState, dispatch) => {
    if (formState.name === "" || formState.email === "" || formState.password === "") {
        setValid(false, dispatch);
        return false;
    }
    if (!validateEmail(formState.email)) {
        setError('Enter a valid email!', dispatch);
        return false;
    }

    return true;
}

export default SignUp;