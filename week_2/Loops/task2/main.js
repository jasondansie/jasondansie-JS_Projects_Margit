function runLoop()
{
    let oneLiner;
    for (let i = 2; i < 100; i++) 
    {
        if (i % 2== 0) {
            if (i == 2) {
                oneLiner = `${i} ${100 -i} `;
            }  
            else
            {
                oneLiner += `${i} ${100 -i} `;
            }                                          
        }
    }
    console.log(oneLiner);
}

runLoop();