function solve(args)
{
    let s = +args[0],
        c1 = +args[1],
        c2 = +args[2],
        c3 = +args[3],
        max = 0;
    
    for (let a = 0; a * c1 <= s; a++)
    {
        for (let b = 0; b * c2 <= s - a * c1; b++)
        {
            for (let c = 0; c * c3 <= s - a * c1 - b * c2; c++)
            {                
                if (max < a * c1 + b * c2 + c * c3)
                {
                    max = a * c1 + b * c2 + c * c3;
                }
            }
        }
    }
    
    console.log(max);
}

solve(['110', '19', '29', '39']);