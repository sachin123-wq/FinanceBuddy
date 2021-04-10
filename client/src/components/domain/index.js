import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllDomainName } from '../../actions/domainActions';
import './index.scss';

const Domains = () => {

    const dispatch = useDispatch();
    const domainState = useSelector(state => state.domain);

    useEffect(() => {

        getAllDomainName(dispatch);

    }, []);

    return (
        <div className="main">



        </div>
    )
}

export default Domains;
