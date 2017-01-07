function solve(args)
{
    var n = +args[0],
        arr = args[1].split(" ").map(Number),
        result = sort(arr).join(" ");
    
    function getMax(array, start)
    {
        var max = array[0];

        for (var i = start; i < n; i++)
        {
            if (array[i] > max)
            {
                max = array[i];
            }
        }

        return max;
    }

    function sort(array)
    {       
        var sortedArray = [];        
        for (var i = 0; i < n; i++)
        {
            var max = Math.max.apply(Math, array);
            array.splice(array.indexOf(max), 1);
            sortedArray.unshift(max);
        }
        return sortedArray;
    }

    console.log(result);
}