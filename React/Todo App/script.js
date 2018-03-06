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
    return (
      
    )
  }
}

ReactDOM.render(<Form />, document.getElementById("app"));