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
  }
  render() {
    return (
      
    )
  }
}

ReactDOM.render(<Form />, document.getElementById("app"));