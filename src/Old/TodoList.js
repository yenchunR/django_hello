import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
    render() {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem
            key={index}
            item={item}
            index={index}
            removeItem={this.props.removeItem}
            markTodoDone={this.props.markTodoDone}
          />
        );
      });
      return <ul className="list-group"> {items} </ul>;
    }
  }