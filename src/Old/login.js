import Input from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoRun from "./Todo"
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";



const styleInput = {
    height: '100px',
    width: 'auto',
    top: '20px',
    margin: '0px auto',
    
};
const styleBack = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    height: '400px',
    width: '450px',
    alignItems: 'center',
    borderRadius: "16px",
    margin: '0px auto',
};
const styleBtn = {
    height: '60px',
    width: 'auto',
    marginTop: "45px",
    margin: '0px auto',
    
};
const styleTitle = {
    fontSize: "55px",
    fontFamily: "cursive",
}
const styleBlock = {
    marginTop: '165px',
}

function UserGreeting(props) {   
    return <h1>Welcome back, CGUER!</h1>; 
} 
function GuestGreeting(props) {   
    return <h1>Hi CGUer, please sign up.</h1>; 
}
function SignButton(props){
    const isLoggedIn = props.isLoggedIn; return props.isLoggedIn ? <Button style={styleBtn}><Link to="/Todo">Sign</Link></Button> : <GuestGreeting />;
}

 export default class Login extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render(){
        return(
            <div style = {styleBack}>
                <div style = {styleBlock} >
                    <h1 style={styleTitle}>Login</h1>
                    
                    <form>
                        <Input style={styleInput} placeholder="YourEmail@mail.com" 
                        label="Email" variant="outlined"/>
                            <br></br>
                        <Input style={styleInput} type="password" autoComplete="current-password"
                            placeholder="Input Password" label="Password" variant="outlined"/>  
                        <br></br> 
                    </form>
                    
                    <SignButton isLoggedIn={true} />
                    
                </div>
            </div>
        )
    }
}


