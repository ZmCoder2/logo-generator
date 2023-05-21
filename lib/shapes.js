// This is how the colors for the text and shape are generated.
// Also this is how the text is generated to be displayed
class Shapes {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor
    }

    setText(text) {
        this.text = text
    }

    setTextColor(textColor) {
        this.textColor = textColor
    }
}

module.exports = Shapes;