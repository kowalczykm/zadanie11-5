function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			self.changeText();
		});
		$('body').append(this.$element);
	},
	changeText: function () {
		this.$element.text(prompt('Wprowadź tekst'));
	}
}
var btn1 = new Button('Hello!');

btn1.create();