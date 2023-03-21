window.onload=function(){
    getRandomQuote();
}

function getRandomQuote(){
    var btn=document.getElementById("btn");
    btn.onclick=function(){
        var quoteArr=[
"The purpose of our lives is to be happy.",
"Life is what happens when you're busy making other plans." ,
"Get busy living or get busy dying." ,
"You only live once, but if you do it right, once is enough." ,
"Many of lifes failures are people who did not realize how close they were to success when they gave up.",
"If you want to live a happy life, tie it to a goal, not to people or things.",
"Never let the fear of striking out keep you from playing the game.",
"Money and success dont change people; they merely amplify what is already there.",
"Sing like no ones listening, love like youve never been hurt, dance like nobodys watching, and live like its heaven on earth.",
"Curiosity about life in all of its aspects, I think, is still the secret of great creative people.",
"Life is not a problem to be solved, but a reality to be experienced."
        ];
        
var randomQuote=document.getElementById("quote");
var rando=Math.floor(Math.random()*10)
randomQuote.textContent="\""+quoteArr[rando]+"\"";

    }
}