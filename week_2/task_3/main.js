let answer = prompt("What is your age?");

if(answer < 18)
{
    console.log("Too young");
}
else if(answer <=27)
{
    console.log("Right age for military service.");
}
else if(answer <=41)
{
    console.log("You are in reserve");
}
else if(answer <=55)
{
    console.log("You are in the backup reserve");
}
else
{
    console.log("Too age.");
}

