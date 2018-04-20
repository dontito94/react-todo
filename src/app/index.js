var React = require('react');
var ReactDOM = require('react-dom');


class Clock extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
     date: new Date(),
     todos:['washing','eating','sexing'],
     age:30
   };

  }
  render() {
    var todos = this.state.todos;
    todos = todos.map(function (item,index) {
      return(
  <TodoItem item={item} key={index}/>
      );

    });
       var ager = setTimeout(function () {
      this.setState({
        age:35
      });
    }.bind(this),5000);
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>{this.state.todos[2]} when am {this.state.age}</h2>
        <ul>{todos}</ul>

      </div>
    );
  }
}
//nesting component
class TodoItem extends React.Component{
  render(){
    return(
      <div className="todo-item">
      <span className="todo-name">{this.props.item}</span>
      </div>
    )
  }
}
//put component into a html page

ReactDOM.render(<Clock mssg="i like eating"/>,document.getElementById('todo-wrapper'));
