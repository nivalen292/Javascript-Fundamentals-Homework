function solve(args)
{
    var n = +args[0],
        arr = args[1].split(" ").map(Number),
        result;

    function calculate(array)
    {
        var resultArray = [],
            index;
        for (var i = 0; i < n; i++)
        {
            if (i === 0 || i === n - 1)
            {
                continue;
            }
            else if (array[i] > array[i - 1] && array[i] > array[i + 1])
            {
                resultArray.push(i);
            }
        }
        index = (Math.min.apply(Math, resultArray) !== Infinity) ? Math.min.apply(Math, resultArray) : -1;
        return index;
    }

    result = calculate(arr);
    console.log(result);
}
