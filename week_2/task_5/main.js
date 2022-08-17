function getNum() 
{
    let num1;

    num1 = parseInt(prompt("Please enter a number:"));

    if(num1 >= 0 && (num1 % 2 == 0)) 
    {
        console.log("Number " + num1 + " is even");
    } 
    else if(num1 > 0 && (num1 % 2 != 0))
    {
        console.log("Number " + num1 + " is odd");
    }
    else
    {
        console.log("Number " + num1 + " is negative try again!");
        getNum();
    }
}

getNum();