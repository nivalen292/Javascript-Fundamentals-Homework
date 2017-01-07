function solve(args)
{
    let n = +args[0],
        arr = [],
        count = 1,
        resultArray = [],
        result;
    for (let i = 0; i < n; i++)
    {
        arr[i] = +args[i + 1];
    }
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] < arr[i + 1])
        {
            count++;
        }
        else
        {
            resultArray.push(count);
            count = 1;
        }      
    }
    resultArray.push(count);
    result = Math.max.apply(Math, resultArray);
    console.log(result);
}

solve(['8', '7', '3', '2', '3', '4', '2', '2', '4']);
