import {
    TOGGLE_EXTRA_NAV_OPTIONS, SAVING
} from './types';

export const toggleExtraNavOptions = (value, dispatch) => {
    dispatch({
        type: TOGGLE_EXTRA_NAV_OPTIONS,
        payload: value
    })
}

export const setSaving = (value, dispatch) => {
    dispatch({
        type: SAVING,
        payload: value
    })
}