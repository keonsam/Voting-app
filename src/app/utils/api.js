const axios = require('axios');

//signup api
export function signup(userName, userEmail, password, callback){
  axios.post('/signup', {userName, userEmail, password})
    .then(res => {
      return callback(res.data);
    });
}

// login api
export function login(userEmail, password, callback) {
  axios.post('/login', {userEmail, password})
  .then(res => {
    return callback(res.data);
  });
}

// auth login
export function isAuth(callback) {
  axios.get('/checkUser')
    .then(res => {
      callback(res.data);
    })
    .catch(err => {
      callback(false);
    })
}

export function logout(callback) {
  axios.get('/logout').then(res => {
    callback(res.data);
  });
}

export function postChart(userEmail, title, data, colors, callback) {
  axios.post('/postChart',{userEmail, title, data, colors})
  .then(res =>{
    return callback(res.data);
  })
}

export function getChart(id, callback){
  console.log(id);
  axios.post('/getChart',{id})
  .then(res => {
    console.log(res.data)
    return callback(res.data);
  })
}
