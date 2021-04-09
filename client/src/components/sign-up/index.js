import React from "react";
import { useSelector, useDispatch } from 'react-redux';

// ACTIONS
import {
    showSignIn, showSignUp
} from '../../actions/signupActions';

// COMPONENTS
import Modal from "../../common/modal";
import SignUp from "./signUp";
import SignIn from "./signIn";

// STYLES
import "./index.scss";

const SignUpModal = (props) => {

    const modalState = useSelector(state => state.signupModal)
    const dispatch = useDispatch()
    
    // TODO: don't send props, handle them with state in seperate componenets
    return (
        <Modal show={props.show} onClose={props.onClose}>
            {
                modalState.showSignUp
                && <SignUp
                    showSignIn={() => { showSignIn(dispatch) }}
                    onClose={props.onClose}
                />
            }
            {
                modalState.showSignIn
                && <SignIn
                    showSignUp={() => { showSignUp(dispatch) }}
                    onClose={props.onClose}
                />
            }
        </Modal>
    )
}

export default SignUpModal;