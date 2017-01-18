function solve(args)
{
    var s = +args[0],
        count = 0;
    
    for (let cars = 0; cars * 4 <= s; cars++)
    {
        for (let trikes = 0; trikes * 3 + cars * 4 <= s; trikes++)
        {
            for (let trucks = 0; trucks * 10 + cars * 4 + trikes * 3 <= s; trucks++)
            {
                if (cars * 4 + trucks * 10 + trikes * 3 === s)
                {
                    count++;
                }
            }
        }
    }
    console.log(count);
}


function solve2(args)
{
    var s = +args[0],
        count = 0;
    
    for (let cars = 0; cars * 4 <= s; cars++)
    {
        for (let trikes = 0; trikes * 3 <= s - cars * 4; trikes++)
        {
            for (let trucks = 0; trucks * 10 <= s - trikes * 3 - cars * 4; trucks++)
            {
                if (cars * 4 + trucks * 10 + trikes * 3 === s)
                {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

solve(['40']);
solve2(['40']);