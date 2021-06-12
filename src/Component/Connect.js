import React from 'react';
import axios from 'axios';

var Yourname = "ruru";

export default class ListUser extends React.Component{
    constructor(props){
        super(props);
        this.JsonUrl = "http://localhost:8000/myhello/profile/?name="+Yourname;
        this.state = {
            userName: '',
            Passwd: '',
            Account: '',
            Creat: '',
        }
    }
    componentDidMount(){
        axios.get(this.JsonUrl)
        .then(result =>{
            console.log(result);
            const data = result.data;
            if(data){
                this.setState({
                  userName: data.name,
                  Passwd: data.passwd,
                  Account: data.account,
                  Creat: data.created_at,
                });
            }
        })
        .catch(error => {
          console.log(error);
        })
    }
    render(){
        return(
            <div>
                <h3 >{this.state.userName}</h3>
                <h3 >{this.state.Passwd}</h3>
            </div>
        );
    }
}