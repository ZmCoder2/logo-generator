const triangle = require('../lib/triangle')
const circle = require('../lib/circle')
const square = require('../lib/square')

function logoGenerator(data) {
    let shapes = undefined
    if (data.shapes === 'Square') {
        shapes = new square(data.shapeColor, data.text, data.textColor)
    } else if (data.shapes === 'Circle') {
        shapes = new circle(data.shapeColor, data.text, data.textColor)
    } else if (data.shapes === 'Triangle') {
        shapes = new triangle(data.shapeColor, data.text, data.textColor)
    }
    return shapes.render();
}

module.exports = logoGenerator;