import "babel-polyfill";
let name = 'Scott';
let greeting = 'hello ${name}';
console.log(greeting);

class Foo {
  method() {}
}

let name1 = 'zach'
while (true) {
    let name1 = 'obama'
    console.log(name)  //obama
    break
}
console.log(name)  //zach

class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

class Cat extends Animal {
    constructor(){
        super()
        this.type = 'cat'
    }
}

let cat = new Cat()
cat.says('hello') //cat says hello