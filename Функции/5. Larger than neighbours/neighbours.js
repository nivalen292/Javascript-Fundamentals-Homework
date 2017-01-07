function solve(args)
{
    var n = +args[0],
        arr = args[1].split(" ").map(Number),
        result;

    function calculate(array)
    {
        var result = 0;
        for (var i = 0; i < n; i++)
        {
            if (i === 0 || i === n - 1)
            {
                continue;
            }
            else if (array[i] > array[i - 1] && array[i] > array[i + 1])
            {
                result++;
            }
        }
        return result;
    }

    result = calculate(arr);
    console.log(result);
}

solve(6, "-26 -25 -28 31 2 27");