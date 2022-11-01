const { useState, Component } = require("react");
const React = require("react");

class Try extends Component {
  render() {
    return (
      <>
        <li>
          <h4>답변 : {this.props.tryinfo.try}</h4>
          <p>결과 : {this.props.tryinfo.result}</p>
        </li>
      </>
    );
  }
}

module.exports = Try;
