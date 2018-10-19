import axios from 'axios';
// import config from './config'

export default  {
    
    testConnect: function(data) {
        return axios.get('/api/test', data);

    },

    runAuth: function(data) {
        return axios.put('/api/auth', data);
    }
}

// module.exports = service