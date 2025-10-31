/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */


/* Prompt */

/* Prompt with Conditional */


/* AGE */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */

// make an integer variable for age, prompt user for it
// make a string variable for name, prompt user for it
// if age is greater than 16, alert "you don't look that old!"
// otherwise alert name is age years old

var age = prompt("How old are you?");
var fname = prompt("What's your name?");
if (age >= 16) alert("you don't look that old");
else alert(fname + " is " + age +" years old" ); 


/* ICE CREAM */

/* No Prompt */


/* Prompt */
/* Var Alert Prompt */ 

// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What's your favorite flavor?");

// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt("How many scoops do you want?");

// alert "You want " scoops "scoops of " flavor
alert("You want " + scoops + " scoops of " + flavor);

/* Prompt with Conditional */

// make a string variable for favorite ice cream flavor, prompt user for it
var flavor = prompt("What's your favorite flavor?");

// make an integer variable for number of scoops on the cone, prompt user for it
var scoops = prompt("How many scoops do you want?");

// alert "You want " scoops "scoops of " flavor
if (scoops > 3) alert("You're too fat!");
else alert("You want " + scoops + " scoops of " + flavor);


/* PET */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */

/* Var Alert Prompt Conditionals */
// make a variable for pet type, prompt user for it 
// make a variable for pet name, prompt user for it
// alert "You have a pet type named pet name 
// if pet is a dog, say "I like dogs, too!"
// if it is a cat, say "I'm allergic to cats"
// If it is not a dog or a cat, say "what an interesting pet!"


var pettype = prompt("What's your pet type?")
var petname = prompt("What's your pet name?")
alert("You have a " + pettype + " named " + petname);
if (pettype == "dog") alert("I like dogs, too!");
else if (pettype == "cat") alert("I'm allergic to cats");
else alert("What an interesting pet!");