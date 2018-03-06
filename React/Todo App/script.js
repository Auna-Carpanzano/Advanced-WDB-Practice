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
  }
  render() {
    return (
      
    )
  }
}

ReactDOM.render(<Form />, document.getElementById("app"));