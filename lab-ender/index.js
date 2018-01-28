'use strict';

const instruction =
`\nStart:
 $ node

New Queue:
 > const myQ = new require('./lib/queue');
Enqueue (add new node to top of stack):
 > myQ.enqueue(<value>);
 // returns myQ.front
Dequeue (remove node from front of queue):
 > myQ.dequeue();
 // returns removed node

New Stack:
 > const myStk = new require('./lib/stack');
Push (add new node to top of stack):
 > myStk.push(<value>)
 // returns myStk.top
Pop (remove node from top of stack):
 > myStk.pop()
 // returns removed node
Peek (view top node of stack, without removing):
 > myStk.peek()
 // returns myStk.top

Exit:
 > .exit\n`;

console.log(instruction);
