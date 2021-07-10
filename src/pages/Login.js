//this is for login sample
import React, { Component } from 'react';
import { Button, Container} from 'react-bootstrap';

class Login extends Component{
	constructor(props)
	{
		super(props);
		this.state = { 
			email:"",
			password:""
		}
	}
		
submit()	
	{
	
	fetch('http://127.0.0.1:8000/api/login',{
		method:'post',
		body:JSON.stringify(
			this.state
			),
		headers:{
			'Accept': 'Application/json',
			'Content-Type': 'Application/json',
		}
	}).then(function(response){
		response.json().then(function(res){
			console.log(res)
		})
	})
}

render() { 
	return(
		<Container className="col-md-6">
			<h1>Login</h1>
			<input type="email" onChange={(item) =>{this.setState({email:item.target.value})}} placeholder="type your email"/>
			<input type="password" onChange={(item) =>{this.setState({password:item.target.value})}} placeholder="password"/>
		 <Button onClick={()=>{this.submit()}} >Login</Button>
		 </Container>
		
		
	
		)
	}
}
export default Login;