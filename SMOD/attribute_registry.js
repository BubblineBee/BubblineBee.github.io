// Definitions.
class smodAttribute {
  constructor(special_internal_name) {
    this.sin = special_internal_name;
  }
  
  trigger() {console.log(this.sin + ' has been triggered!');}
  update() {}
  attack() {console.log(this.sin + ' has been triggered!');}
  onDie() {console.log(this.sin + ' has been triggered!');}
  onHit() {console.log(this.sin + ' has been triggered!');}
}

var attributeArray = [];
var deaconArray = [];
var timeArray = [];
var spaceArray = [];
var lightArray = [];
var voidArray = [];
var mindArray = [];
var heartArray = [];
var rageArray = [];
var hopeArray = [];
var doomArray = [];
var lifeArray = [];
var bloodArray = [];
var breathArray = [];
var neutralArray = [];

//-------------------------------------------
// Example attribute, DO NOT ADD TO ARRAY.
//-------------------------------------------

class deaconAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    console.log('DQ0N has arrived.');
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    console.log('DQ0N has arrived.');
    super.attack();
  }
  onDie() {
    console.log('DQ0N has arrived.');
    super.onDie();
  }
  onHit() {
    console.log('DQ0N has arrived.');
    super.onHit();
  }
}

var deacon = new deaconAttribute('Deacon');
deaconArray.push(deacon);

//-------------------------------------------
// Neutral Attributes.
//-------------------------------------------

class artifactAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var artifact = new artifactAttribute('Artifact');
neutralArray.push(artifact);

class plushAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var plush = new plushAttribute('Plush');
neutralArray.push(plush);

class flammableAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var inferno = new flammableAttribute('Inferno');
var tinder = new flammableAttribute('Tinder');
neutralArray.push(tinder, inferno);

class glassAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var glass = new glassAttribute('Glass');
neutralArray.push(glass);

class humidAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var moist = new humidAttribute('Moist');
var dry = new humidAttribute('Dry');
neutralArray.push(moist, dry);

class fragileAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var brittle = new fragileAttribute('Brittle');
neutralArray.push(brittle);

class weatherAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var rain = new weatherAttribute('Rain');
neutralArray.push(rain);

class animalAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var feral = new artifactAttribute('Feral');
neutralArray.push(feral);

class magicAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var magic = new magicAttribute('Magic');
neutralArray.push(magic);

class geoAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var quartz = new geoAttribute('Quartz');
neutralArray.push(quartz);

class buildingAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var house = new buildingAttribute('House');
neutralArray.push(house);

class landAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var ocean = new landAttribute('Ocean');
neutralArray.push(ocean);

//-------------------------------------------
// Time Attributes.
//-------------------------------------------

class musicAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var musicBox = new musicAttribute('Music Box');
timeArray.push(musicBox);

//-------------------------------------------
// Space Attributes.
//-------------------------------------------


//-------------------------------------------
// Light Attributes.
//-------------------------------------------

class dramaticAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    window.alert('The enemy is making a scene!');
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var dramatic = new dramaticAttribute('Dramatic');
lightArray.push(dramatic);

class diceAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var eightBall = new diceAttribute('8-Ball');
lightArray.push(eightBall);

//-------------------------------------------
// Void Attributes.
//-------------------------------------------


//-------------------------------------------
// Mind Attributes.
//-------------------------------------------


//-------------------------------------------
// Heart Attributes.
//-------------------------------------------

class charmAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var flushed = new charmAttribute('Flushed');
heartArray.push(flushed);

class sodaAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var soda = new sodaAttribute('Soda');
heartArray.push(soda);

//-------------------------------------------
// Rage Attributes.
//-------------------------------------------

class angerAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var anger = new angerAttribute('Anger');
rageArray.push(anger);

//-------------------------------------------
// Hope Attributes.
//-------------------------------------------


//-------------------------------------------
// Doom Attributes.
//-------------------------------------------


//-------------------------------------------
// Life Attributes.
//-------------------------------------------

class woodAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var wood = new woodAttribute('Wooden');
lifeArray.push(wood);

//-------------------------------------------
// Blood Attributes.
//-------------------------------------------

class magnetAttribute extends smodAttribute {
  constructor(special_internal_name) {
    super(special_internal_name);
  }
  
  trigger() {
    super.trigger();
  }
  update() {
    super.update();
  }
  attack() {
    super.attack();
  }
  onDie() {
    super.onDie();
  }
  onHit() {
    super.onHit();
  }
}

var magnetOne = new magnetAttribute('Magnet I');
var magnetTwo = new magnetAttribute('Magnet II');
var magnetThree = new magnetAttribute('Magnet III');
var magnetFour = new magnetAttribute('Magnet IV');
var magnetFive = new magnetAttribute('Magnet V');
var magnetSix = new magnetAttribute('Magnet VI');
var magnetSeven = new magnetAttribute('Magnet VII');
bloodArray.push(magnetOne, magnetTwo, magnetThree, magnetFour, magnetFive, magnetSix, magnetSeven);

//-------------------------------------------
// Breath Attributes.
//-------------------------------------------


//-------------------------------------------
// Final array, do not change.
//-------------------------------------------

attributeArray.concat(neutralArray, timeArray, spaceArray, lightArray, voidArray, mindArray, heartArray, rageArray, hopeArray, doomArray, lifeArray, bloodArray, breathArray);
