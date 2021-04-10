import {
    GET_ALL_DOMAIN
} from '../actions/types'

const initState = {
    domains: [],
    domainLoading: true
}

const domainReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_DOMAIN:
            return {
                ...state,
                domains: action.payload,
                domainLoading: false
            };

        default:
            return state;
    }
}

export default domainReducer