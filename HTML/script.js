
var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.age = function(){
        console.log(2020 - yearOfBirth);
    };
}

var bala = new Person('bala',1997,'programmer'); 
bala.age();








