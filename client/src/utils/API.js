import axios from 'axios';
// import config from './config'

export default  {
    
    testConnect: function(data) {
        return axios.get('/api/test', data);

    }
}

// module.exports = service