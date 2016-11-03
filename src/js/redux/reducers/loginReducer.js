

let initial = {
  isAuthenticating: false,
  isLoggedIn: false,
  authenticationToken: '',
  authError: null
}

let loginReducer = function(state = initial, action) {
        switch(action.type) {
            case "REQUEST_AUTH":
                return Object.assign({}, state, {
                    isAuthenticating: true
                });
                break;
            case "AUTH_SUCCESS":
                return Object.assign({}, state, {
                    isAuthenticating: false,
                    isLoggedIn: true,
                    authenticationToken: action.response.data.token
                });
                break;
            case "AUTH_FAIL":
                return Object.assign({}, state, {
                    isAuthenticating: false,
                    authError: action.response.error
                });
            break;
           default:
                return state;

    }
}

export default loginReducer
