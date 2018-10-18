import axios from 'axios';
// import config from './config'

export default {
    
    runAuth: function(authData) {
        return axios.post('/api/auth', authData);

    }
}