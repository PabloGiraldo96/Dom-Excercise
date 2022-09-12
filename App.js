// variables 

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

// Array which contains data in JSON format

const quotes = [
	{ 
		"quote" : "Whereof one cannot speak, thereof one must be silent", 
		"source" : "Ludwig Wittgenstein" 
	},
	{
		"quote" : "I think therefore I am (“Cogito, ergo sum”)", 
		"source" : "Descartes"
	},
	{
		"quote" : "A lie can travel halfway around the world while the truth is putting on its shoes", 
		"source" : "Mark Twain"
	},
	{
		"quote" : "Great minds discuss ideas; average minds discuss events; small minds discuss people", 
		"source" : "Eleanor Roosevelt"
	},
	{
		"quote" : "If you have a garden and a library, you have everything you need", 
		"source" : "Marcus Tullius Cicero"
	},
	{
		"quote" : "One cannot step twice in the same river", 
		"source" : "Heraclitus"
	},
	{
		"quote" : "Everything in the universe is within you. Ask all from yourself", 
		"source" : "Dalai L"
	},
	{
		"quote" : "There is but one truly serious philosophical problem, and that is suicide", 
		"source" : "Albert Camus"
	},
	{
		"quote" : "If God did not exist, it would be necessary to invent Him", 
		"source" : "Voltaire"
	},
	{
		"quote" : "We are what we repeatedly do. Excellence, then, is not an act, but a habit", 
		"source" : "Aristoteles"
	},
	{
		"quote" : "The function of prayer is not to influence God, but rather to change the nature of the one who prays", 
		"source" : "Søren Kierkegaard"
	}
]

// function to change the background color and also the quotes

function changeIt(){
	let random = Math.floor(Math.random() * quotes.length);
	quote.innerText = quotes[random].quote;
	person.innerText = quotes[random].source;

	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.body.style.backgroundColor = "#" + randomColor;
	color.innerHTML = "#" + randomColor;
};

	





