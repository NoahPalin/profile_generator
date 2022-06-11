const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that activity? ', (music) => {
      rl.question('Which meal is your favourite? (i.e. breakfast, lunch, etc.) ', (meal) => {
        rl.question('What is your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
              console.log();
              console.log(`Hi my name is ${name}, I really enjoy listening to ${music} music while ${activity}. My favourite meal of the day is ${meal}.`);
              console.log(`In particular, my favourite thing to eat for ${meal} is ${food}. My favourite sport is ${sport}. I'd say my personal`);
              console.log(`superpower is ${superpower}. Thanks for reading my profile!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});