function solve(args)
{
    let count = 0,
        arr = [],
        n = args[0],
        resultArray = [],
        result,
        number,
        sum = 0,
        sumArray = [];
    for (let i = 0; i < n; i++)
    {
        arr[i] = args[i + 1];
    }
    for (let i = 0, len = arr.length; i < len; i++)
    {
        for (let j = 0; j < len; j++)
        {
            if (arr[i] === arr[j])
            {
                count++; 
                sum += +arr[i];
            }
        }
        sumArray.push(sum);
        resultArray.push(count);
        sum = 0;
        count = 0;
    } 
    result = Math.max.apply(Math, resultArray);
    for (let i = 0, len = sumArray.length; i < len; i++)
    {
        for (let j = 0, leng = arr.length; j < leng; j++)
        {
            if (sumArray[i] / arr[i] === result)
            {
                number = arr[i];
            }
        }
    }
    console.log(`${number} (${result} times)`);
}

solve(['13', '7', '1', '1', '15', '2', '3', '4', '2', '1', '2', '4', '9', '3']);
solve(['13', '1', '1', '1', '4', '1', '3', '4', '4', '1', '2', '1', '9', '3']);
solve(['13', '6', '2', '6', '3', '6', '6', '4', '4', '1', '2', '12', '3', '3']);