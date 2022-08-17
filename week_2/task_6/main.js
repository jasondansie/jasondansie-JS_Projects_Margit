function hourlySalary() 
{
     const salary = parseFloat(prompt("What is your hourly salary?"));
     const hoursWorked = parseFloat(prompt("How many hours did you work today?"));
     const dailySalary = (salary *  hoursWorked);

    if (hoursWorked < 7) 
    {  
        console.log("Your daily salary is: " + dailySalary);
    } 
    else if(hoursWorked > 7 && hoursWorked < 10)
    {     
        let newSalary = ((salary * 1.5) * 2 + dailySalary);
        console.log("Your daily salary is: " + newSalary);
    }
    else
    {
        const hoursPlusTen = (hoursWorked - 9) * (salary * 2);
        let newSalary = ((salary * 1.5) * 2 + hoursPlusTen + dailySalary);
        console.log("Your daily salary is: " + newSalary);
    }     
}

hourlySalary();