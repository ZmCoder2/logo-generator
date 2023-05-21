// Generates the Triangle option
const shapes = require("./shapes");

class Triangle extends shapes {
    render() {
      return `<svg height='500' width='500' xmlns='http://www.w3.org/2000/svg'>
        <polygon points="250,50 50,450 450,450" fill="${this.shapeColor}"/>
        <text fill='${this.textColor}' font-size='140' x='120' y='420'>${this.text}</text>
      </svg>`;
    }
  }
  
  module.exports = Triangle;
  