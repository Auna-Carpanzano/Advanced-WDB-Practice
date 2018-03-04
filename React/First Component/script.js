class Pet extends React.Component {
  render() {
    const liStyle = {fontSize: "1.5em"};
    const hobbies = ["Sleeping", "Eating", "Cuddling"];
    return (
      <div className="card">
        <h2 className="name">Moxie</h2>
        <img src="https://images.unsplash.com/photo-1511876849877-f8d0d953d2e0?ixlib=rb-0.3.5&s=4488ff58aa49f9fc89091a95f9c4fa4d&auto=format&fit=crop&w=1050&q=80" alt="Moxie the cat" className="img" />
      <h5 style={{fontSize: "2em"}}>Hobbies:</h5>
      <ul>
        <li style={liStyle}>Sleep</li>
        <li style={liStyle}>Eat</li>
      </ul>
      </div>
    )
  }
}
ReactDOM.render(<Pet />, document.getElementById("app"));