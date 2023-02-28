var fullname = prompt("Please enter your full name: ");
var username1 = prompt("Please enter your username: ");
var gender = confirm("Please confirm your gender:\nPress OK if MALE\nPress Cancel if Female: ");
if (gender == true)
{
    var gender ="M";
    alert("Your profile gender is set to MALE");
}
else
{
    var gender = "F";
    alert("Your profile gender is set to FEMALE");
}
var desc1 = prompt("Please type a brief description of yourself: ");

var year1 = prompt("Please enter your Birth Year: ");
var d = new Date;
var current_year = d.getFullYear();
var age1 = current_year - year1;

var picture = confirm("Do you want to use a custom profile picture?");
if (picture == true)
{
    var picture = prompt("Please enter the file name of your picture");
    document.getElementById("ppic").src = picture;
}
else
{
    document.getElementById("ppic").src = "prof.png";
}



document.getElementById("fname").innerHTML = fullname;
document.getElementById("username").innerHTML = username1;
document.getElementById("gender").innerHTML = gender;
document.getElementById("desc").innerHTML = desc1;
document.getElementById("year").innerHTML = year1;
document.getElementById("age").innerHTML = age1;