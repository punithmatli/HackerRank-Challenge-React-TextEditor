import React from 'react';


class TextEditor extends React.Component {
  state = {
    input:"",
    text:[]
  }

  inputChangeHandler = (event) => {
    this.setState({
      input:event.target.value
    })
  }

  undoHandler = event => {
    event.preventDefault();
    let ctext = [...this.state.text]
    ctext.pop();
    this.setState({
      text:ctext
    })
  }

  appendHandler = (event) => {
    event.preventDefault();
    let ctext = [...this.state.text]
    ctext.push(this.state.input);
    this.setState({
      text:ctext,
      input:""
    })
  }

  render() {

    return (
      <React.Fragment>
        <div className="controls">
          <input className="word-input" type="text" data-testid="word-input" onChange={this.inputChangeHandler} value={this.state.input} />
          <button data-testid="append-button" onClick={this.appendHandler} disabled={!this.state.input}>Append</button>
          <button data-testid="undo-button" onClick={this.undoHandler} disabled={!this.state.text.length}>Undo</button>
        </div>
        <div className="text-field" data-testid="text-field">
          {this.state.text.join(" ")}
        </div>
      </React.Fragment>
    );
  }
}

export default TextEditor;
