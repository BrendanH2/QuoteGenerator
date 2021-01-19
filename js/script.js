/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//An array of various quotes
const quotes = [

  {quote: 'I\'m going to to it rigth this time! Study hard, study often, and start a new career.' ,
   source:'Brendan Hafele', 
   citation: 'Team Treehouse Unit 1', 
   year:'2020'},

   {quote: 'He was a wise man who invented beer.' ,
   source:'Plato', 
   /*citation: 'Citation 2', 
  year:'Year 2'*/},

   {quote: 'There\'s not a liberal America and a conservative America -there\'s the United States of America.' ,
   source:'President Barack Obama', 
   citation: 'DNC Keynote Speech' ,
   year:'2004'
   //source: https://www.businessinsider.com/obama-quotes-inspirational-best-speeches-2017-1
   },
   
   {quote: 'Going to the mountains is going home.' ,
   source:'John Muir'
   //source:https://www.goodreads.com/quotes/203310-going-to-the-mountains-is-going-home
   },
   //citation: 'Citation 4', 
  // year:'Year 4'},

  
   {quote: 'Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. And, as it always has, rock crushes scissors.' ,
   source:'Sheldon Cooper', 
   citation: 'Big Bang Theory', 
   /*year:'Year 5'*/},

   {quote: 'I’m not superstitious, but I am a little stitious.' ,
   source:'Michael Scott', 
   citation: 'The Office Season 2' 
   /*year:'Year 6'*/},

   {quote: 'There will come a time when you believe everything is finished; that will be the beginning.' ,
   source:'Louis L\'Amour', 
   citation: 'The Walking Dream', 
   year:'1984'},

   {quote: 'I am still learning' ,
   source:'Michelangelo'
   //citation: 'Citation 8', 
   //year:'Year 8'
  },

   {quote: 'If you think education is expensive, try estimating the cost of ignorance.' ,
   source:'Char Meyers', 
   //citation: 'Citation 9', 
   year:'1974'
  //source: https://quoteinvestigator.com/2016/05/03/expense/
  },

   {quote: 'Try not to become a man of success, but rather try to become a man of value.' ,
   source:'Albert Einstein', 
   citation: 'LIFE', 
   year:'1955'
   //source:https://quoteinvestigator.com/2017/11/20/value/#:~:text=a%20holy%20curiosity.-,Try%20not%20to%20become%20a%20man%20of%20success%20but%20rather,1955%20issue%20of%20%E2%80%9CLIFE%E2%80%9D.
  }
   
];



/***
 * `getRandomQuote` function
***/

//const randomIndex = () => {return Math.floor(Math.random() * quotes.length)};
let getRandomIndex =  () => {return Math.floor(Math.random() * quotes.length)};
let randomIndex = getRandomIndex();
let getRandomQuote = () => {return quotes[randomIndex]};

/***
 * `printQuote` function/
***/

/***
 * Generate Random Background color.
 * Use RGB. RGB each have a value of 0 to 255. 
 * Use a random function for each to create a random color.   
 ***/

 

 let colorValue = () => {return Math.floor(Math.random() * 256)};

 function setQuoteBoxColor() {
   let redValue = colorValue();
   let greenValue = colorValue();
   let blueValue = colorValue();
   let color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  
   return color;
 }


//use a string literal and logic
function printQuote() {
    let calledQuote = getRandomQuote();


    //printing the quote is required
    document.querySelector(".quote").innerHTML = `${calledQuote.quote}`;

    //using the provided HTML, to my knowledge and experience, assinging a value to the .source class restricts the ability to  assign a value to either the .citation class or .year class
    //usign booleans and logic, depending on availble properties of an object , a new HTML structe will be created in .source class.

    if(!calledQuote.year && !calledQuote.citation) {
      document.querySelector(".source").innerHTML = `${calledQuote.source }`;
    }
    else if (calledQuote.citation && !calledQuote.year) {
      document.querySelector(".source").innerHTML = `<span class="source1">${calledQuote.source}</span>
                                                    <span class="citation">${calledQuote.citation}</span>`;
    }
    else if (!calledQuote.citation && calledQuote.year) {
      document.querySelector(".source").innerHTML = `<span class="source1">${calledQuote.source}</span>
                                                    <span class="year">${calledQuote.year}</span>`;
    }
    else {
      document.querySelector(".source").innerHTML = `<span class="source1">${calledQuote.source}</span>
                                                    <span class="citation">${calledQuote.citation}</span>
                                                    <span class="year">${calledQuote.year}</span>`
    }

    
    document.querySelector(".quote-box").style.backgroundColor = setQuoteBoxColor();
    randomIndex = getRandomIndex();
    
}

/***
 * refresh page
 * use setInterval with printQuote as a parameter
 */

 setInterval(printQuote, 3000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);