import axios from 'axios';
import { 
    getLocalStorageItem, setLocalStorageItem, 
    removeLocalStorageItem 
} from './localStorage';


const axiosInstance = axios.create({
    baseURL: '',
    timeout: 60000,
    headers: {
        Authorization: 'Bearer ' + getLocalStorageItem('access')
    },
});


axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {

        // console.log("error.config ", error.config)
        // console.log("error.response", error.response)

        const originalRequest = error.config;

        if (typeof error.response === 'undefined') {
            alert('Internet disconnected');
            return Promise.reject(error);
        }

        // console.log("original request url", originalRequest.url)

        if (
            error.response.status === 401 &&
            originalRequest.url === `${__API_BASE_ADDRESS__}/auth/token/refresh/`
        ) {
            clearLocalStorageAndRedirectHome()
            return Promise.reject(error);
        }

        // access taken expired 
        if (
            error.response.data.code === 'token_not_valid' &&
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            const refreshToken = localStorage.getItem('refresh');

            if (refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
                const now = Math.ceil(Date.now() / 1000);

                if (tokenParts.exp > now) {
                    // REFRESH TOKEN IS VALID, GET NEW ACCESS TOKEN
                    return axiosInstance
                        .post(`${__API_BASE_ADDRESS__}/auth/token/refresh/`, { refresh: refreshToken })
                        .then((response) => {

                            // console.log('new access token', response.data.access);
                            // console.log('set new access token')

                            setLocalStorageItem('access', response.data.access);

                            axiosInstance.defaults.headers['Authorization'] =
                                'Bearer ' + response.data.access;
                            originalRequest.headers['Authorization'] =
                                'Bearer ' + response.data.access;

                            return axiosInstance(originalRequest);
                        })
                        .catch((err) => {
                            console.log('request to get new access token failed', err);
                        });
                } else {
                    // REFRESH TOKEN EXPIRED, NO OPTION BUT TO SIGN IN AGAIN (get new access, refresh token)
                    // console.log('Refresh token is expired', tokenParts.exp, now);
                    // console.log('redirect to home page 2')
                    clearLocalStorageAndRedirectHome()
                }
            } else {
                // REFRESH TOKEN NOT FOUND
                // console.log('Refresh token not available.');
                // console.log('redirect to home page 3')
                clearLocalStorageAndRedirectHome()
            }
        }

        // some other error occured 
        return Promise.reject(error);
    }
);

const clearLocalStorageAndRedirectHome = () => {
    removeLocalStorageItem('access');
    window.location.href = '/';
}

export default axiosInstance;