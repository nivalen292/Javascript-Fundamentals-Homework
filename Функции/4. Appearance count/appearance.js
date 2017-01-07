function solve(args)
{
    let n = +args[0],
        arr = args[1].split(" ").map(Number),
        x = +args[2],
        result;
    function count(array, searchElement)
    {
        let count = 0;

        for (let i = 0; i < array.length; i++)
        {
            if (array[i] === searchElement)
            {
                count++;
            }    
        }
        return count;
    }
    result = count(arr, x);
    console.log(result);
}