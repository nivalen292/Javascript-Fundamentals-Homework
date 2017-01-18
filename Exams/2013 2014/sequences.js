function solve(args)
{
    let arr = [];
    args.forEach(x => arr.push(+x)),
    resultArray = [],
    result = 0,
    count = 0;

    for (let i = 0, len = arr.length; i < len; i++)
    {
        if (arr[i - 1] > arr[i])
        {
            count++;
        }
    }

    console.log(count);
}

solve(['7',
'1',
'2',
'3',
'4',
'4',
'5',
'6'])