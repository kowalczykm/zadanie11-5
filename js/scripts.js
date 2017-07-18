function Button(text) {
	this.text = text || 'Hello';

	this.$element = $('<button>');
	this.$element.text(this.text);
}

Button.prototype = {
	create: function() {
		var self = this;

		var $tempButton = $(this.$element).clone();
		
		$tempButton.click(function() {
			self.changeText(this);
		});

		// $('body').append(this.$element);
		$('body').append($tempButton);
	},
	changeText: function (element) {
		$(element).text(prompt('Wprowadź tekst'));
	}
}
var btn1 = new Button('Hello!');

btn1.create();
btn1.create();
