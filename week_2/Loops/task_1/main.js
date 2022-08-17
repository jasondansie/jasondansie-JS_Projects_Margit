function runLoop() 
{
    console.log("hello");
    for(let i = 1; i < 100 ; i++) 
    {       
        if (i % 2 != 0) {
            console.log("num: ", i);
        }   
    }
}

runLoop();
