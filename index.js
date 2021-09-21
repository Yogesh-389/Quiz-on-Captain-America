var readlineSync= require('readline-sync');
const chalk = require('chalk');
console.log(chalk.yellow("This is a quiz on Captain America "))
var userName=readlineSync.question("Enter your name Please ? ");
console.log( chalk.blue("Welcome ! ")+chalk.yellow(userName));

var score=0;
var highscores=[
  {
    name:" Captain Rogers ",
    score:10
  },
  {
    name:" Peggy Carter ",
    score:08
  }


]

function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.blue("Woahh ! you know rogers very well "))
    score+=2;
  }
  else
  {
    console.log(chalk.red("Oops ! you need some research on captain"))
  }
  
  console.log(chalk.yellow("___________________________________________"));
}

//play("name of captain ?","Steve rogers");

var questions=[  {    question:"What is Captain America's shield made of? ? ",
                     answer:"vibranium"
                     
},     
{    question:"Real Name of captain america in movie? ",
                     answer:"Steve Rogers"
                     
},
{    question:"What does Steve promise Peggy before he gets frozen? ? ",
                     answer:"dancing"
                     
},
{    question:"Captain's Best friend ? ",
                     answer:"Bucky Barnes"
                     
},
{    question:"Who is older? Steve or Bucky Barnes? ? ",
                     answer:"Bucky Barnes"
                     
}


]

for(var i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);
}

console.log(chalk.green("YAY ! You Scored : ")+chalk.yellowBright(score));

for(var i=1;i<highscores.length;i++)
{
  if(score>=highscores[i].score)
  {
     console.log(chalk.blue("Congratulations ! ")+"you made it to the SCOREBOARD ! ");
     console.log(chalk.magentaBright("Till then checkout previous scores and send me screenshot of your score so that I can update it ! "));
  }
}

console.log("Check out the high score ! ");

for(var i=0;i<highscores.length;i++)
{
  console.log("High Score : ",chalk.yellowBright(highscores[i].score)," By "+chalk.yellow(highscores[i].name));
}
