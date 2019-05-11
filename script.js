//List of quotes

const quotes = [
    "It does not matter how slowly you go as long as you do not stop.",
    "The past cannot be changed.",
    "Optimism is the faith that leads to achievement.",
    "With the new day comes new strength and new thoughts.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "Only I can change my life."
]

//console.log(quotes[1]);

//document.getElementById("displayText").innerHTML = quotes[1];

//console.log(Math.random());

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
//console.log(getRandomInt(quotes.length));

function motivateMe() {
    let displayQuote = quotes[(getRandomInt(quotes.length))];
    document.getElementById("displayText").innerHTML = displayQuote;
}

