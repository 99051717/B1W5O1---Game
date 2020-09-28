var naam = prompt("wat is je naam ?");
var profession = prompt ("wat is je profession?");

alert(" okay " +  naam + " de " + profession + " dus ");
alert("welkom in de game!");
alert("Laten we beginnen");

//scenario begin
var vraag1 = prompt("je bent thuis en het regent maar je moet je medicijnen hebben ga je naar buiten ?");
if (vraag1 == "ja") {
    alert("je gaat dus naar buiten");
} else {
    alert("game over");
    throw new Error('Game Over');
}
//scenario auto
var vraag2 =prompt("je bent buiten maar pak je de auto ?");

if (vraag2 === "ja") {
    alert("slimme keuze");
}else  {
    alert("dat wordt lopen dus");




var vraag3 =prompt("ga je tanken ?");

if (vraag3 === "ja"){
    alert("mooi je gaat dus tanken");      
}else  {
    alert("dat wordt lopen dus");

var vraag4 =prompt("je benen worden moe maar je komt bij een leeg staand huis ga je naar binnen ?")
    if (vraag4 === "ja"){
        alert("Niet heel slim om een random huis binnen te gaan. <Game Over>")
        throw new Error('Game Over');
    }else {
        alert("je loopt dus verder");
        vraag4= prompt("je hebt geen energie meer en je kan eigenlijk niet meer verder. Ga je toch verder ?");
            if (vraag4 == "ja"){
            alert("je valt neer en heb je medicijnen niet binnen de tijd kunnen halen <game over>")
            window.stop();
        }else {
            alert("je hebt het opgegeven <Game over>")
            throw new Error('Game Over');
        }

    }
}

//scenario man    
var vraag5 =prompt("er staat iemand langs de weg met een hoed en een donkere lange jas. hij vraagt om hulp. Ga je helpen ?");
    if (vraag5 == "ja"){ 
    alert("serieus ? je helpt een man met een lange jas die je niet kent. <Game Over>");
    window.stop();
} else {
    alert("slimme keus");
}
    //scenario wapenwinkel
var vraag6 =prompt("je bent je wapen vergeten thuis maar omdat het zo gevaarlijk is in de stad moet je er wel 1 hebben. Je komt aan bij bij een wapen winkel.  koop je een wapen ?");

if (vraag6 == "ja"){
    alert("je hebt een wapen gekocht");
    
    //scenario met wapen
    vraag6=prompt("je komt aan bij de winkel en man staat voor de winkel en wil je geld hebben schiet je hem neer ?");
    if (vraag6 == "ja"){
        alert("je schiet de man dood en loopt naar binnen");
        alert("gefeliciteerd je hebt je medicijnen")
        throw new Error('Game Over')

     }else {
         alert("Waarom je wapen niet gebruiken als je hem wel hebt ? <Game Over>")
         throw new Error('Game Over');

     }
    //scenario zonder wapen
}else {
    alert("je gaat verder zonder wapen");
    vraag6 =prompt("je komt aan bij de winkel en man staat voor de winkel en wil je geld hebben schiet je hem neer ?");
    if (vraag6 == "ja"){
    alert("je hebt geen wapen gekocht sukkel <Game Over>")
    throw new Error('Game Over');
    }else {
     alert("Je hebt geen wapen sukkel <Game Over>")
     throw new Error('Game Over');
    }
}
}