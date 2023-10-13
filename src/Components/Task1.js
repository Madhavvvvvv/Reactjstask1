import React, { Component } from "react";

class Task1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "", // Change the state variable name
    };
  }

  handleChange = (event) => {
    const inputText = event.target.value;
    const wordCount = inputText.split(/\s+/).filter(Boolean).length; // Split by spaces and count non-empty words
    this.setState({
      name: wordCount, // Update the state variable with the word count
    });
  };

  render() {
    return (
      <div>
        <textarea
          name="comments"
          rows={7}
          cols={50}
          onChange={this.handleChange}
        ></textarea>
        <p>Word Count: {this.state.name}</p>
      </div>
    );
  }
}

export default Task1;
