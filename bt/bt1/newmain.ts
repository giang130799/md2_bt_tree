import {Stack} from "./bt1";
import {Queue} from "./bt1";
let queue=new Queue<string>();
let stack = new Stack<string>();
stack.push('able was');
stack.push("ere ");
stack.push("saw elba");
queue.enqueue(" saw elba");
queue.enqueue(" ere");
queue.enqueue("able was ");
stack.pop();
queue.dequeue()
console.log(stack.pop());
console.log(queue.dequeue());