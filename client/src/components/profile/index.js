import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../actions/userActions';
import './index.scss';

const UserProfile = () => {

    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);

    useEffect(() => {
        getUserProfile(dispatch);
    }, [])

    return (
        <div>
        {
            userState.profileLoading
                ?<div className="loading">Loading</div>
                :<div>{userState.userProfile.name}</div>
        }
        </div>
    )
}

export default UserProfile
