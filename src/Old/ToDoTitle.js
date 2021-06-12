import { Height } from "@material-ui/icons";
import React from "react";
const styleArgument = { 
  fontSize:'80px', color:'white', fontSize: "45px", marginTop: "100px", };

export default class ToDoTitle extends React.Component {
    render() {
      return <h1 style={styleArgument}>CGU Todo list</h1>;
    }
  }