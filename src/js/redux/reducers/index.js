import  { combineReducers } from 'redux'
import twitterReducer from './twitterReducer'
import loginReducer from './loginReducer'
import {reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
	twitter: twitterReducer,
	login: loginReducer,
	form: formReducer
})

export default rootReducer
