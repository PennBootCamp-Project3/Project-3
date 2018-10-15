import axios from 'axios';

export default {
    runAuth: function(authData) {
        return axios.post('/api/auth', authData);
    }
}