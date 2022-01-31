let userName = '';

userName ? console.log(`Hello, ${userName} `) : console.log('Hello!');

let userQuestion = 'Will I become a werewolf tonight?';

console.log(`The user asked: ${userQuestion}, ${userName}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Definitely';
    break;
  case 5:
    eightBall = 'Signs point to yes';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'My sources say no';
    break;
  case 8:
    eightBall = 'Mistakeeeee';
    break;
}

console.log(`The eight ball answered: ${eightBall}`);
