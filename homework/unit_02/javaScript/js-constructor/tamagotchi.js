class Tamagotchi{
  constructor(name, creatureType){
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
    this.name = name;
    this.creatureType = creatureType;
  }

  cry() {
    this.foodInTummy--;
    console.log("WAAAH!!!!!!");
    console.log(this.name + ' has current food in tummy = ' + this.foodInTummy);
  };
  puke() {
    this.health--;
    console.log('Bleeeeh! Sick!!!!!!');
    console.log(this.name + ' has current health = ' + this.health);
  };
  yawn(){
    this.restedness--;
    console.log('Yaaaawwwwn! So tired');
    console.log(this.name + ' has current restedness = ' + this.restedness);
  };
}



var bob = new Tamagotchi('bob');
var tom = new Tamagotchi('tom');


console.log(bob);
console.log(tom);


bob.cry();
tom.cry();
bob.puke();
tom.puke();
bob.yawn();
tom.yawn();
