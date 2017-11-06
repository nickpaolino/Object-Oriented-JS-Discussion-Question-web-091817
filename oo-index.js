var eventArea = document.getElementById('event_area');

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
  }

  attack(){
    this.createDiv("'ATTAAAAAAAAAK!''");
    this.changeImage('attack');
  }

  defend(){
    this.createDiv("You put sunglasses on.");
    this.changeImage("defend");
  }

  heal(){
    this.createDiv("You feel refreshed after yoga.");
    this.changeImage("heal");
  }

  breakdance(){
    this.createDiv("It's really spinning class");
    this.changeImage("breakdance");
  }

  eatCronut(){
    this.createDiv("You've gained 1000 health points.");
    this.changeImage("eat");
  }

  restart(){
    while (eventArea.hasChildNodes()){
      eventArea.removeChild(eventArea.lastChild);
    }
    this.createDiv("Out on the street, ready to go!");
    this.changeImage("new");
  }

  createDiv(text){
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(text));
    eventArea.prepend(div);
  }

  changeImage(className){
    const imageArea = document.getElementById('image_area');
    imageArea.className = className;
  }

}

const unicorn = new Unicorn("New", "Unicorn");

document.getElementById('restart').addEventListener("click",()=> unicorn.restart())
document.getElementById('attack').addEventListener("click",()=> unicorn.attack())
document.getElementById('defend').addEventListener("click",()=> unicorn.defend())
document.getElementById('heal').addEventListener("click",()=> unicorn.heal())
document.getElementById('breakdance').addEventListener("click",()=> unicorn.breakdance())
document.getElementById('eat').addEventListener("click",()=> unicorn.eatCronut())
