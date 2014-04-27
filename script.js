document.addEventListener('DOMContentLoaded', function() {
   var textTemplate = document.getElementById('text-template');
var render = Handlebars.compile(textTemplate.innerHTML);
var finalHTML = render({
	texts: [
		{user: "david", msg: "How does this work?"},
		{user: "", msg: "Handlebars uses javascript to render tempates"},
		{user: "vineeth", msg: "I do Pi stuff"}
    ]
});
var screen = document.getElementById('screen');
screen.innerHTML = finalHTML;
});