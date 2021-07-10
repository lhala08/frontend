import React, { Component } from 'react';
import NavBar from './components/Navbar'
import Login from './pages/Login'
import './App.css';

//fetching API - just to test if backend and frontend is well communicated we remove this later
class App extends Component{  //uses extends components for render to display html code inside html element

  componentDidMount()
  {
    fetch('http://127.0.0.1:8000/api/test' ).then(function(res){
      res.json().then(function(res){
        console.log(res);
       })
    })

  }

render() {
  return (
    <div className="App">
        <NavBar/>
        <Login/>
    </div>
  );
}
}
export default App;

/*this is for demo for purpose*/