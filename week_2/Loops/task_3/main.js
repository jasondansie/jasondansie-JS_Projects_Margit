function avarageSpeed() 
{
    const distanceKm = parseFloat(prompt("Enter a distance in km?"));
    const timeH = parseFloat(prompt("Enter the time in hours?"));

    if (distanceKm == 0) {
        console.log("Program is exiting Good bye!");
        return 0;
    }
    else
    {
        let avgSpeed = distanceKm/timeH;
        console.log("The average speed is:", avgSpeed, "km.");
    }    
}

avarageSpeed();