import React, { useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

// ACTIONS
import { logout, checkLoginState } from "../../actions/authActions";
import { toggleSignUpModal } from '../../actions/signupActions';

// COMPONENTS
import SignUpModal from "../sign-up";
import { Button } from '../../common/button';

// IMAGES 
import ProfileIcon from "../../images/profile.svg";
import navBook from '../../images/nav_images/nav_book.svg';
import navFeed from '../../images/nav_images/nav_feed.svg';
import navList from '../../images/nav_images/nav_list.svg';
import navMock from '../../images/nav_images/nav_mock.svg';

// STYLES
import "./index.scss";

const AppHeader = () => {

    // STATES
    const signupModalState = useSelector(state => state.signupModal);
    const authState = useSelector(state => state.auth);
    const globalState = useSelector(state => state.global)

    const dispatch = useDispatch();
    const history = useHistory();

    // CHECK LOGIN STATE 
    useEffect(() => {
        checkLoginState(dispatch)
    }, [])

    const handleSignUp = () => {
        toggleSignUpModal(true, dispatch);
    }

    const handleLogOut = () => {
        logout(dispatch);
        history.push("/");
    }

    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to={`/`}>
                    <span className="navbar-brand" data-toggle="collapse" data-target=".navbar-collapse.show">
                        <div className="logo"> FinBuddy </div>
                    </span>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {
                        globalState.showExtraNavOptns
                        && (
                            <div className="navbar-nav">
                                <NavLink to="/posts" activeClassName="active-link">
                                    <div className="nav-item nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                                        <div><img src={navFeed} alt="nav_feed" /></div>
                                        <div className="link-title">Posts</div>
                                    </div>
                                </NavLink>
                                <NavLink to={`/course`} activeClassName="active-link">
                                    <div className="nav-item nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                                        <div><img src={navBook} alt="nav_book" /></div>
                                        <div className="link-title">Courses</div>
                                    </div>
                                </NavLink>
                                <NavLink to={`/mock-interview`} activeClassName="active-link">
                                    <div className="nav-item nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                                        <div><img src={navMock} alt="nav_mock" /></div>
                                        <div className="link-title">Live Q/A</div>
                                    </div>
                                </NavLink>
                                <NavLink to="/mylist" activeClassName="active-link">
                                    <div className="nav-item nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">
                                        <div><img src={navList} alt="nav_list" /></div>
                                        <div className="link-title">Learning Paths</div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    }

                    <form className="form-inline ml-auto nav-btns">
                        {
                            authState.isLoggedIn
                                ? <div className="dropdown">
                                    <img className="profile-icon" src={ProfileIcon} />
                                    <div className="dropdown-content profile-dropdown-content">
                                        <NavLink to="/user_profile" activeClassName="active-dropdown">
                                            <span data-toggle="collapse" data-target=".navbar-collapse.show">Profile</span>
                                        </NavLink>
                                        <Link to="#" onClick={handleLogOut}>
                                            <span data-toggle="collapse" data-target=".navbar-collapse.show">Logout</span>
                                        </Link>
                                    </div>
                                </div>
                                : (
                                    <>
                                        {/* <button
                                            data-toggle="collapse" data-target=".navbar-collapse.show"
                                            type="button"
                                            className="header-btn primary-btn"
                                            onClick={handleSignUp}
                                        >
                                            SIGN IN
                                        </button> */}
                                        <Button
                                            data-toggle="collapse" data-target=".navbar-collapse.show"
                                            className="header-btn"
                                            text="Sign Up"
                                            className="header-btn primary-btn"
                                            onClick={handleSignUp}
                                        />
                                    </>
                                )
                        }
                    </form>
                </div>
            </nav>
            <SignUpModal
                show={signupModalState.showModal}
                onClose={() => toggleSignUpModal(false, dispatch)}
            />
        </div>
    )
}

export default AppHeader;