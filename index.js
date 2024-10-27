alert("Welcome!")
let tal1 = prompt("Enter any number");
let tal2 = prompt("Enter another number");
let calculate = prompt("Which of these calculations do you want to use (+, -, *, /)?");
let sum;

//OBS!! Addition blir fel!!!
if (calculate == "+"){
    sum = (tal1 + tal2);
    alert(tal1 + " + " + tal2 + " = " + sum);

}else if (calculate == "-"){
    sum = (tal1 - tal2);
    alert(tal1 + " - " + tal2 + " = " + sum);

}else if (calculate == "*"){
    sum = (tal1 * tal2);
    alert(tal1 + " * " + tal2 + " = " + sum);

}else if (calculate == "/"){
    sum = (tal1 / tal2);
    alert(tal1 + " / " + tal2 + " = " + sum);
}else{
    alert("Error! choose one of the above calculation methods");
}

alert ("Goodbye, see you again!")


