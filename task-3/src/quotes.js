import React, { Component } from "react";

class Quotes extends Component {
  state = {
    quotes: [],
    index: 0,
    prevIndex: null,
  };
  componentDidMount() {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ quotes: data }))
      .then(() => this.getRandom());
  }
  getRandom() {
    this.setState({
      index: Math.ceil(Math.random() * (this.state.quotes.length - 1)),
    });
  }
  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({
              index: this.state.prevIndex,
            });
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            this.setState({ prevIndex: this.state.index });
            this.getRandom();
          }}
        >
          Next
        </button>
        <p> {this.state.quotes[this.state.index]?.quote}</p>
        <p> {this.state.quotes[this.state.index]?.author}</p>
      </>
    );
  }
}

export default Quotes;
