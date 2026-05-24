import axios from 'axios';

const $host = axios.create({
    baseURL: 'https://ruskaz-server.onrender.com/api'
});

const $authHost = axios.create({
    baseURL: 'http://localhost:5001/api'
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
