let name = '';
let todos = [];
let favoriteDish = [];
let events = [];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const arrayOfCommands = [
    {
        command: 'Hello my name is',
        answer: 'Nice to meet you'
    },
    {
        command: 'What is my name?',
        answer: 'Your name is'
    },
    {
        command: 'Add fishing to my todo',
        answer: 'fishing added to your todo'
    },
    {
        command: 'Add singing in the shower to my todo',
        answer: 'singing in the shower added to your todo'
    },
    {
        command: 'Remove fishing from my todo',
        answer: 'Removed fishing from your todo'
    },
    {
        command: 'What is on my todo?',
        answer: 'You have'
    },
    {
        command: 'What day is it today?',
        answer: 'Date :'
    },
    {
        command: 'Calculate:',
        answer: ''
    },
    {
        command: 'My favorite dish is lasagne',
        answer: 'lasagne added to favorite dish'
    },
    {
        command: 'What is my favorite dish',
        answer: 'Your favorite dish is '
    },
    {
        command: 'Set a timer for 4 minutes',
        answer: 'Timer set :'
    },
    {
        command: "Add Bike ride the 3/5/2019 to my calendar",
        answer: 'added to your calendar'
    },
    {
        command: 'What am I doing this week?',
        answer: 'This week you have 1 event :'
    }
];

function getReply(command) {
  let reply = "";
    let matchingCommand = arrayOfCommands.find(element => command.includes(element.command));

    if (matchingCommand.command.includes("Hello my name is")) {
        const words = command.split(' ');
        name = words[words.length - 1];
        reply = matchingCommand.answer + " " + name;
    }
    else if (matchingCommand.command.includes('What is my name?')) {
        if (name) {
            reply = matchingCommand.answer + " " + name;
        }
        else {
            reply = "no name";
        }
    }
    else if (matchingCommand.command.startsWith("Add") && matchingCommand.command.endsWith("todo")) {
        let todo = command.replace('Add', "").replace('to my todo', "").trim();
        todos.push(todo);
        reply = matchingCommand.answer;
    }

    else if (matchingCommand.command.startsWith("Remove")) {
        let index = todos.indexOf('fishing');
        todos.splice(index, 1);
        reply = matchingCommand.answer;

    }
    else if (matchingCommand.command.includes('What is on my todo?')) {
        reply = matchingCommand.answer + " " + (todos.length) + " " + "todos-" + " " + todos;
    }
    else if (matchingCommand.command.includes('What day is it today?')) {
        let d = new Date();
        reply = matchingCommand.answer + d.getDate() + " of " + months[d.getMonth()] + " " + d.getFullYear();

    }
    else if (matchingCommand.command.includes("My favorite dish is")) {
        const lastWord = command.split(' ');
        const dish = lastWord[lastWord.length - 1];
        favoriteDish.push(dish);
        reply = matchingCommand.answer;
    }
    else if (matchingCommand.command.includes('What is my favorite dish')) {
        reply = matchingCommand.answer + favoriteDish;

    }
    else if (matchingCommand.command.includes('calendar')) {
        let newWords = command.split(' ');
        const eventName = newWords[1] + " " + newWords[2];
        let eventDate = command.replace('Add Bike ride the', "").replace('to my calendar', "").trim();
        let event = {};
        event.name = eventName;
        event.date = eventDate;
        events.push(event);   
        reply = event.name + " " + matchingCommand.answer;
        console.log(events);
    }
    else if (matchingCommand.command.includes('What am I doing this week?')) {
        for (let i = 0; i < events.length; i++) {
            reply = matchingCommand.answer + events[i].name + " the " + events[i].date;
        }

    }
    else if (matchingCommand.command.includes("timer")) {
        let interval = command.split(' ')[4].trim();
        setTimer(interval);
        reply = matchingCommand.answer + interval;
    }
    else if (matchingCommand.command.includes('Calculate:')) {
        let newString = command.replace('Calculate:', "").trim();
        reply = eval(newString);
    }
    return reply;
}

function setTimer(mins) {
    let timeOutMilliseconds = mins * 60 * 1000;
    window.setTimeout(window.alert, timeOutMilliseconds, 'Timer done!');
}

let answer1 = getReply("Hello my name is Anna");
console.log(answer1);
let answer2 = getReply("What is my name?");
console.log(answer2);
let answer3 = getReply("Add fishing to my todo")
console.log(answer3);
let answer4 = getReply("Add singing in the shower to my todo")
console.log(answer4);
let answer5 = getReply("Remove fishing from my todo")
console.log(answer5);
let answer6 = getReply("What is on my todo?")
console.log(answer6);
let answer7 = getReply("What day is it today?")
console.log(answer7);
let answer8 = getReply("My favorite dish is lasagne")
console.log(answer8);
let answer9 = getReply("What is my favorite dish")
console.log(answer9);
let answer10 = getReply("Add Bike ride the 3/5/2019 to my calendar")
console.log(answer10);
let answer11 = getReply("What am I doing this week?")
console.log(answer11);
let answer12 = getReply("Set a timer for 4 minutes");
console.log(answer12);
let answer13 = getReply("Calculate: 4 * 2");
console.log(answer13);