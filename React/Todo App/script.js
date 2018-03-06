const TodoItem = ({text}) => (
  <li>{text}</li>
);

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ""});
  }
  render() {
    const {newTodo} = this.state;
    const todos = this.state.todos.map((t, i) => (
      <TodoItem key={i} text={t} />                       
    ));
    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit={this.handleSubmit}>
        </form>
        <div>
          <ol>
            {todos}
          </ol>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById("app"));