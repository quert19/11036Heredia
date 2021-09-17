var x = prompt("Username: ");
var y = prompt("Password: ");
let obj = [{username : "user1", password: "password"},

  {username : "user2", password: "password1"},

  {username : "user3", password: "password2"},

  {username : "user4", password: "thispassword"} ]

for(i = 0; i < obj.length; i++){
if (x == obj[0].username && y == obj[0].password){
  var a = "valid";
    alert(a);
    exit(0);
}
else if (x == obj[1].username && y == obj[1].password){
    var a = "valid";
      alert(a);
      exit(0);
  }
  else if (x == obj[2].username && y == obj[2].password){
    var a = "valid";
      alert(a);
      exit(0);
  }
  else if (x == obj[3].username && y == obj[3].password){
    var a = "valid";
      alert(a);
      exit(0);
  }
else{
    var z = "invalid";
    alert(z);
    exit(0);
}
}
