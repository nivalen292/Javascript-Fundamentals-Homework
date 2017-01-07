function solve(args)
{
    let n = +args[0],
        arr = [],
        smallest;
    for (let i = 0; i < n; i++)
    {
        arr[i] = +args[i + 1];
    }
    while (arr.length != 0)
    {
        smallest = Math.min.apply(Math, arr);
        console.log(smallest);
        arr.splice(arr.indexOf(smallest), 1);
    }
}

solve(['10', '36', '101', '1', '314', '282', '338', '31', '27', '30', '20']);