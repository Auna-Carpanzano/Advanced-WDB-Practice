class Box extends React.Component {
  render() {
    const fontSize = Math.floor(Math.random() * 80) + 20;
    const backgroundColor = ["black", "red", "blue", "green"][Math.floor(Math.random() * 4)];
    return (
      <div style={{
        fontSize: `${fontSize}px`,
        backgroundColor,
        width: "500px", 
        height: "200px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white"
      }}>
        Random Box
      </div>
    )
  }
}