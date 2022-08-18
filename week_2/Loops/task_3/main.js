function avarageSpeed() 
{
    let stopper;
 
    do {
        const distanceKm = parseFloat(prompt("Enter a distance in km?"));
               
        if (distanceKm == 0) {
            console.log("Program is exiting Good bye!");
            stopper = distanceKm;
            return 0;
        }
        else
        { 
            const timeH = parseFloat(prompt("Enter the time in hours?"));

            let avgSpeed = distanceKm/timeH;  
            console.log("The average speed is:", avgSpeed, "km.");
        }

    } while (stopper != 0); 
}

avarageSpeed();