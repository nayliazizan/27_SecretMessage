let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

secretMessage.pop(); //step 1

console.log(secretMessage.length); //step 2

secretMessage.push('to', 'Program'); //step 3

secretMessage[7] = 'right'; //step 4

secretMessage.shift(); //step 5

secretMessage.unshift('Programming'); //step 6

secretMessage.splice(6,5, 'know,');  // step 7

console.log(secretMessage.join(' '));

