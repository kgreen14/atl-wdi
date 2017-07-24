class Tamagotchi{
  constructor(){
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry(){
    this.foodInTummy--;
    console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
    console.log('current food in tummy: ' + this.foodInTummy);
  }
}


var bob = new Tamagotchi();
var tom = new Tamagotchi();


console.log(bob);
console.log(tom);


bob.cry();
tom.cry();