import React, {Component} from 'react';
import './App.css';


const TodoItem = ({
    todo,
    handleRemoveItem
}) => (
    <div
        className="todo-item"
    >
        <span className="todo-item-text">{todo.text}</span>
        <button onClick={handleRemoveItem}>X</button>
    </div>
);

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoItems: [],
            currentInput: ''
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/todolist/')
            .then((response) => response.json())
            .then(({todos}) => {
                this.setState({todoItems: todos});
            });
    }

    handleAddItem = () => {
        let {
            currentInput,
            todoItems
        } = this.state;
        let newItem = {
            text: currentInput
        };

        fetch('http://127.0.0.1:8000/create_todo/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then((response) => response.json())
            .then(({todo}) => {

                this.setState({
                    todoItems: [todo, ...todoItems],
                    currentInput: ''
                });
            })
            .catch((errors) => {
                console.log(errors)
            });
    };

    handleRemoveItem = (todoId) => {
        let {todoItems} = this.state;

        fetch(`http://127.0.0.1:8000/delete_todo/${todoId}/`, {method: 'delete'})
            .then((response) => response.json())
            .then(({todo}) => {
                let updatedItemsList = todoItems.filter((item) => {
                    return item.id !== todoId;
                });

                this.setState({
                    todoItems: updatedItemsList,
                });
            });
    };

    handleItemChange = (event) => {
        this.setState({
            currentInput: event.currentTarget.value
        });
    };

    render() {
        let {
            todoItems,
            currentInput
        } = this.state;
        let todoList = todoItems.map((todo, index) => (
            <TodoItem
                key={index}
                todo={todo}
                handleRemoveItem={() => this.handleRemoveItem(todo.id)}
            />
        ));

        return (
            <div className="App">
                <div className="add-item-form-container">
                    <input
                        className="add-item-input"
                        placeholder="e.g. Cook dinner"
                        onChange={this.handleItemChange}
                        value={currentInput}
                    />
                    <button
                        className="add-button"
                        onClick={this.handleAddItem}
                    >
                        Add Item
                    </button>
                </div>
                <div className="todo-list">
                    {todoList}
                </div>
            </div>
        );
    }
}

export default App;
