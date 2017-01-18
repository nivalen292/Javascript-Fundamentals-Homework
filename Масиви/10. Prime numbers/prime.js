function solve(args)
{
    let n = +args[0],
        arr = [],
        biggestPrime;
    for (let i = 0; i < n; i += 1)
    {
        arr[i] = i + 1;
    }
    arr.splice(0, 1);
    for (let i = 0, len = arr.length; i < Math.sqrt(n); i += 1)  // i < Math.sqrt(n) , i < len
    {
        for (let j = 0; j < len; j += 1)
        {
            if (arr[j] % arr[i] === 0 && arr[j] !== arr[i])
            {
                arr.splice(j, 1);
            }
        }
    }

    biggestPrime = Math.max.apply(Math, arr);
    console.log(biggestPrime);
}

solve(["10000"]);