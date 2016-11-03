import React, { Component } from 'react'

import getLogin from '../redux/actions';
import { bindActionCreators } from 'redux'
import { reduxForm } from 'redux-form'
import { Link } from 'react-router';


class PostLogin extends Component {
  componentWillMount(){
  //this is for fetching data from the server
//  when the application starts
  // this.props.postLogin();
  }

  onSubmit(props){
    this.props.login(props).then(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }

  render() {
  		var opendorse = {
  			backgroundColor: "#a0cc55"
  		}
  		var dorse = {
  			color: "#a0cc55"
  		}
  		var black = {
  			color: "black"
  		}
  		const { fields: { username, password }, handleSubmit } = this.props
  		return (
  			<div>
  				<div class="ui middle aligned center aligned grid" >
  					<div class="column">
  						<h2 class="ui teal image header">
  							<img style={{"width":"200px"}} src="/img/opendorse.svg" class="image" />
  							<div class="content" style={black}>
  								Log-in to your account
  							</div>
  						</h2>
  						<form class="ui large form " onSubmit={handleSubmit(this.onSubmit.bind(this))} >
  							<div class="ui stacked segment">
  								<div class="field">
  									<div class="ui left icon input">
  										<i class="user icon"></i>
  										<input type="text" name="phone" placeholder="Email or Phone" {...username}/>
  									</div>
                    <div>

                    </div>
  								</div>
  								<div class="field">
  									<div class="ui left icon input">
  										<i class="lock icon"></i>
  										<input type="password" name="password" placeholder="Password" {...password}	/>
  									</div>
  								</div>
  								<button class="ui fluid large submit button" style={opendorse} >

  								</button>
  							</div>

  							<div class="ui error message"></div>

  						</form>

  						<div class="ui message">
  							New to us? <a href="#" style={dorse}>Sign Up</a>
  						</div>
  					</div>
  				</div>
  			</div>

  			)
  	}
}

function validate(values){
  const errors = {};
  if(!values.username){
    errors.username = "required"
  }
  if(!values.password){
    errors.username = "required"
  }
  return errors;
}

export default reduxForm({
  form: 'syncValidation',  // a unique identifier for this form
  fields: ["username", "password"],// <--- warning function given to redux-form
  validate
}, null, { getLogin })(PostLogin)
