export class Stack<T>{
    container : T[]=[];
    constructor() {
    }
    push(data:T):void{
        this.container.push(data)
    }
    pop():T{
        return this.container.pop();
    }
    size():number{
        return this.container.length;
    }
}
export class Queue<T>{
    container:T[]=[];
    constructor() {
    }
    enqueue(item:T):void{
        this.container.push(item);
    }
    dequeue():T|undefined{
        return this.container.shift();
    }
    size():number{
        return this.container.length;
    }
}