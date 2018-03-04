class Box extends React.Component {
  render() {
    const fontSize = Math.floor(Math.random() * 80) + 20;
    const backgroundColor = ["black", "red", "blue", "green"][Math.floor(Math.random() * 4)];
  }
}