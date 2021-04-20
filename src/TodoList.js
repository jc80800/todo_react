import React, { Component } from 'react'

class TodoList extends Component{
    constructor(props){
        super(props)

        this.createTasks = this.createTasks.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };

    deleteItem(item){
        this.props.delete(item);
    }

    createTasks(item){
        return (
            <tr>
                <td>{item.text}</td>
                <td>{item.key}</td>

                <button onClick={() => this.deleteItem(item)} class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">delete</i></button>
            </tr>
        )
    };

    render(){
        const entries = this.props.entries;
        const listItems = entries.map(this.createTasks);

        return (
            <tbody>
                {listItems}
            </tbody>
        )
    };
}

export default TodoList;

