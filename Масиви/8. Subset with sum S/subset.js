function solve(args)
{
    let n = +args[0],
        sum = +args[n + 1],
        result= 'no',
        testSum = 0,
        arr = [];
    for (let i = 0; i < n; i++)
    {
        arr[i] = +args[i + 1];
    }
    for (let i = 0; i < n; i++)
    {
        for (let j = 0; j < n; j++)
        {
            if (testSum + arr[j + i] <= sum)
            {
                testSum += arr[j + i]
            }
            if (testSum === sum)
            {
                result = 'yes';
            }
        }
    }
     console.log(result);
}

solve(['8', '2', '1', '2', '4', '3', '5', '2', '6', '14'])