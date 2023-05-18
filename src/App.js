import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="border">
            <h1>{this.state.number}</h1>
            <div className="flex">
              <button
                className="count"
                onClick={() => {
                  this.setState({ number: this.state.number + 1 });
                }}
              ></button>
              <button
                className="reset"
                onClick={() => this.setState({ number: 0 })}
              ></button>{" "}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
