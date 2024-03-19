import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";

//Starting Game with conditional statements

const game = await inquirer.prompt([
    
    {name: "PM", 
    type:"list", 
     choices:["shehbaz sharif", "nawaz sharif"],
     message: "Who is the Prime Minister of Pakistan"},

]);

    if (game["PM"] === "shehbaz sharif"){
    console.log("That's Correct!! You got it...");
    }
else
{
console.log("Try again!")};

//Game1

const game1 = await inquirer.prompt([

{name: "Cabinet members of Pakistan",
type:"list", 
choices:["12", "14"],
message: "Guess the current figure of Pakistani cabinet members"}
]);

if(game1["Cabinet members of Pakistan"] === "14"){
    console.log("Thats exactly the figure.. You did it");
}
else {
    console.log("Noo!! :(");
    
};

//Game2

const game2 = await inquirer.prompt([{
    name:"Capital of Pakistan", 
    type:"list", 
    choices:["islamabad", "karachi"],
    message: "What is the Capital of Pakistan?"
}]);

if (game2["Capital of Pakistan"] === "islamabad"){
    console.log("You did it!!");   
}
else {
    console.log("Try Again :(");
    
}

//Game3 

const game3 = await inquirer.prompt([{
    name:"Seats of NA",
     type:"list", 
     choices:["332", "336"],
      message: "Guess the Total number of National assembly seats in Pakistan"
}]);

if (game3["Seats of NA"] === "336"){
    console.log("Yess!! one last Question..");    
}
else {
    console.log("sorry");
}

//Game4

const game4 = await inquirer.prompt ([{
    name:"parties in power", 
    type:"list", 
    choices:["Pmln & PPP", "Only pmln"],
     message:"Which two parties are in Power now?"
}]);

if (game4["parties in power"]=== "Pmln & PPP"){
    console.log("You Wont!!!");
    
}
    else {
        console.log("Better luck nect time");
        
    };
