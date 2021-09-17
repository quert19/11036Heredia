
var n = prompt("Please select from 1 - 4");

let person = [{
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
},
{
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
},
{
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
},
{
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
},
{
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
}]

for(i = 0; i < person.length; i++){
    if (n == 1){
    function find(x){return a};
    a = person[0].name + " , " + person[3].name;
    alert(a);
    exit(0);
    }
    else if (n == 2){
    function find(x){return b};
    b = person[4].name;
    alert(b);
    exit(0);
    }
    else if (n == 3){
    function find(x){return c};
    c = person[1].name + " , " + person[2].name;
    alert(c);
    exit(0);
    }
    else if (n == 4){
    function find(x){return d};
    d = person[0].name + " , " + person[1].name + " , " + person[3].name + " , " + person[4].name;
    alert(d);
    exit(0);
    }
    else{
    z = "Please select from 1 - 4 only";
    alert(z);
    exit(0);
    }
}