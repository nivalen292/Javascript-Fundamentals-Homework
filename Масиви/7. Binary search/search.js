function solve(args)
{
    let n = +args[0],
        arr = [],
        x = +args[n + 1],
        result,
        gap,
        k = 0,
        
        min = 0,
        max,
        currentIndex,
        currentElement;
    for (let i = 0; i < n; i++)
    {
        arr[i] = +args[i + 1];
    }
    max = arr.length -1;
    // gap = arr.length / 2;
    result = -1;
    // while (/*gap !== 1*/ k < arr.length) 
    // {
    //     if (x === arr[gap])
    //     {
    //         gap = Math.round(gap);   
    //         result = gap;
    //         gap = 1;                    
    //     }
    //     else if (x < arr[gap])
    //     {
    //         gap -= gap / 2;
    //         gap = Math.floor(gap);
    //     }
    //     else
    //     {   
    //         if (gap % 2 === 0)
    //         {

    //         }
    //         gap += gap / 2;
    //         gap = Math.ceil(gap);
    //         if (gap > arr.length)
    //         {
    //             gap -= arr.length / 2;
    //         }
    //     }
    //     k++;   
    // }

    while (min <= max)
    {
        currentIndex = (min + max) / 2 | 0;
        currentElement = arr[currentIndex];
        if (currentElement < x)
        {
            min = currentIndex + 1;
        }
        else if (currentElement > x)
        {
            max = currentIndex - 1;
        }
        else
        {
            result = currentIndex;
            break;
        }
    }
    console.log(result);
}

solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '64']);