import {
    getLocalStorageItem,
    setLocalStorageItem, removeLocalStorageItem
} from './localStorage'

export const checkLoggedIn = () => {
    return getLocalStorageItem('access');
}

// EMAIL VALIDATION
export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// GET USER ID
export const getUserId = () => {
    const accTok = getLocalStorageItem('access');
    return JSON.parse(atob(accTok.split('.')[1]))._id;
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};