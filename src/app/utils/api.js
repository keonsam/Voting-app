const axios = require('axios');

//signup api
export function signup(userName, userEmail, password, callback){
  axios.post('signup', {userName, userEmail, password})
    .then(res => {
      return callback(res.data);
    });
}

// login api
export function login(userEmail, password, callback) {
  axios.post('login', {userEmail, password})
  .then(res => {
    return callback(res.data);
  });
}
