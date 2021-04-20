import React from 'react';
import TodoList from './TodoList'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      value: '',
      key:'',
      items: []
    };

    this.handleValue = this.handleValue.bind(this)
    this.handleKey = this.handleKey.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleValue(e) {
    this.setState({value: e.target.value});
  }

  handleKey(e){
    this.setState({key: e.target.value});
  }

  addItem(e){
    e.preventDefault();
    const newItem = {
      text: this.state.value,
      key: this.state.key
    };
    this.setState({ 
      items: this.state.items.concat(newItem)
    });
  }

  deleteItem(item){
    const temp = item.text;
    this.setState({
      items: this.state.items.filter((loop) => {
        return loop.text !== temp})
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea value={this.state.value} onChange={this.handleValue} id="textarea1" className="materialize-textarea" data-length="10"></textarea>
                <label>Item's Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea value={this.state.key} onChange={this.handleKey} id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                <label>Description</label>
              </div>
            </div>
            <button onClick={this.addItem} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></button>
          </form>
        </div>

        <table className="responsive-table highlight centered">
          <thead>
            <tr>
                <th>Item</th>
                <th>Description</th>
            </tr>
          </thead>

          <TodoList delete={this.deleteItem}entries={this.state.items}></TodoList>
          
        </table>
      </div>
    ) 
  }
}


export default App;
