interface IArraylist<T>{
    add(data:T):void;
    get(index:number):T;
    size():number;
    remove():void;
}
class ArrayList<T> implements IArraylist<T>{
    container: Array<T>;

    constructor() {
        this.container = [];
    }
    add(data: T): void {
        this.container.push(data);
    }
    get(index: number): T {
        return this.container[index];
    }
    remove(): void {
        this.container.pop()
    }
    size(): number {
        return this.container.length;
    }
}
interface Post {
    title: string
}
let arrayList = new ArrayList<Post>();
arrayList.add({title:"lap trinh js"});
arrayList.add({title:"lap trinh php"});
arrayList.add({title:"lap trinh java"});
console.log(arrayList.container);
