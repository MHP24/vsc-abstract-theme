import { data } from './export-demo.js';

// Hi! I'm a comment :D!!

const unusedFunction = (mail) => data.find(({ mail:_mail }) => mail === _mail );
    
const demoFunction = (array) => {
    data.forEach(({ mail, username, ...rest }) => {
        array = [...array, {
            mailLength: mail.length, 
            usernameLength: username.length, 
            greet: `Hi ${username}!, Welcome to Abstract MH`,
            rest
        }];
    });
    return array;
}

console.log(demoFunction([]));
// unusedFunction('demo@mail.com');