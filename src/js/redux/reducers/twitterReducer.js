

let initial = {
		tweets: {},
		daily: {},
		fetched: false,
}
let twitterReducer = function(state = initial, action){
  switch (action.type){
  	case "RECEIVE_TWEETS":
			return {
					tweets: action.data,
					fetched: true,
				};
  	default:
  		return state;
  }
}

export default twitterReducer
