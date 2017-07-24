class Tamagotchi{
  constructor(name, creatureType){
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
    this.name = name;
    this.creatureType = creatureType;
  }

  cry(){
    this.foodInTummy--;
    console.log("The Tamagotchi is crying!!! WAAAH!!!!!!");
    console.log('current food in tummy: ' + this.foodInTummy);
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
  }
}


var bob = new Tamagotchi('bob', 'fish');
var tom = new Tamagotchi('tom', 'cat');


console.log(bob);
console.log(tom);


bob.cry();
tom.cry();