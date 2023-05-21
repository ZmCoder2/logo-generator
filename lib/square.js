// Generates the square option
const shapes = require("./shapes");

class Square extends shapes {
    render() {
      return `<svg height='500' width='500' xmlns='http://www.w3.org/2000/svg'>
        <rect x="50" y="50" width="400" height="400" fill="${this.shapeColor}"/>
        <text fill='${this.textColor}' font-size='200' x='60' y='310'>${this.text}</text>
      </svg>`;
    }
  }
  
  module.exports = Square;
  