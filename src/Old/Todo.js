import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Todo from "./TodoApp"

export default class TodoRun extends React.Component{
    render() {
        return (
        <div>
            {Todo()}
        </div>);
      }
}