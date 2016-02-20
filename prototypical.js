var Person = function (firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    this.id = 1
    this.id = function(){
        return 1
    }
    this.printName = function (){
        console.log('My name is ', this.firstname, this.lastname);
    }
};

Person.prototype.myName = function() {
    console.log('My full name is ', this.firstname, this.lastname);
};

var brian = new Person('Brian', 'Chirgwin');
var john = new Person('John', 'Doe');

brian.printName(); // My name is Brian Chirgwin
john.printName();  // My name is John Doe
brian.myName();    // My full name is Brian Chirgwin

brian.printName = function(){
    console.log('call me Brian');
};

brian.myName = function(){
    console.log('Mr. ', this.lastname);
};

brian.printName();  // call me Brian
brian.myName();  // Mr. Chirgwin (object version)
john.myName();   // My full name is John Doe (Protoype)
