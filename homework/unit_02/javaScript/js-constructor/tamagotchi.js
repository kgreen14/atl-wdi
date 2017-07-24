console.log('tamagotchi file is loaded');

class Tamagotchi {
  constructor(name, creatureType){
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }

  cry() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
  };
  

var bob = new Tamagotchi('bob', 'fish');
var tom = new Tamagotchi('tom', 'cat');

bob.cry();
tom.cry();
