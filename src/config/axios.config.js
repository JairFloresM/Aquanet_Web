const axios = require('axios').default;

module.exports = axios.create({
    baseURL: 'http://192.168.0.3:4000/api/',
    timeout: 1000
})