import React, { Component } from 'react'

import { fetchTweets } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router';

class getTweets extends Component {
  componentWillMount(){
  //this is for fetching data from the server
  //when the application starts
  this.props.fetchTweets();
  }

  renderTweets(){
    return this.props.tweets.map((tweet) =>{
      return (
        <li class="" key={post.id}>
        <span class=""> {tweet.backend} </span>
        <strong>{tweet.twitter}</strong>
        </li>
      )
    })
  }

  render(){
    return(
      <div>
        <h1>Get tweets</h1>
        <ul>
        {this.renderTweets()}
        </ul>
      </div>
    )
  }
}

function mapStateToProp(state){
  return {
    //dont forget to add reducers to this
    //part to connect the tweets here
    tweets: state.twitter.tweets
  }
}

export default connect(mapStateToProp, { fetchTweets })(getTweets)
