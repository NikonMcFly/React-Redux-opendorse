import axios from "axios";

const fetchTweets = function fetchTweets() {
  return fetch("http://localhost:3000/api/tweets/account")
}


const getTweets = function getWeather() {
  return function(dispatch) {
    return fetchTweets()
      .then(
        response => response.json(),
        error => console.log(error)
      )
      .then(
        json => dispatch(receiveTweets(json))
      )
  };
}

const receiveTweets = function receiveTweets(data) {
  return {
    type: "RECEIVE_TWEETS",
    data
  }
}

//this is the login part
var requestAuth = function() {
    return {
        type: "REQUEST_AUTH"
    }
};

var authSuccess = function(response) {
    return {
        type: "AUTH_SUCCESS",
        response: response
    }
};

var authFail = function(response) {
    return {
        type: "AUTH_FAIL",
        response: response
    }
};


 const getLogin = function(username, password) {
   return dispatch => {
    dispatch(requestAuth);
   return axios.post('http://localhost:3000/auth/signin',{
     username: username,
     password: password
   }).then(function(response){

     if(response.status === 200){
       const token = response.data.token;
       localStorage.setItem('token', token);
       dispatch(authSuccess(response));
     }
     else{
       dispatch(authFail(response));
     }
   })
 }
}


export default {
        getTweets,
        getLogin
}
