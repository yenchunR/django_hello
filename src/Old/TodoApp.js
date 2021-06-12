import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./TodoList";
import ToDoAddForm from "./ToDoAddForm";
import ToDoTitle from "./ToDoTitle";


var todoItems = [];
todoItems.push({ index: 1, value: "Check Icon if you Done", done: false });
todoItems.push({ index: 2, value: "TodoApp", done: true });
todoItems.push({ index: 3, value: "React...", done: true });

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
  }
  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }
  render() {
    return (
      <div id="main">
        <ToDoTitle />
        <TodoList
          items={this.props.initItems}
          removeItem={this.removeItem}
          markTodoDone={this.markTodoDone}
        />
        <ToDoAddForm addItem={this.addItem} />
      </div>
    );
  }
}

const Todo = () => {
  return <TodoApp initItems={todoItems} />;
};

export default Todo;
