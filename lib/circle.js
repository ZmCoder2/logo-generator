// Generates the circle feature
const shapes = require("./shapes");

class Circle extends shapes {
    render() {
        return `<svg height='500' width='500' xmlns='http://www.w3.org/2000/svg'>
        <circle cx="250" cy="250" r="250" fill="${this.shapeColor}"/>
        <text fill='${this.textColor}' font-size='200' x='60' y='310'>${this.text}</text>
        </svg>`
    }
}

module.exports = Circle;