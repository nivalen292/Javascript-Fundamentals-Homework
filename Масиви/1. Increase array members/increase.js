function solve(args)
{
    let n = +args[0],
        result = [];
    for (let i = 0; i < n; i++)
    {
        result[i] = i * 5;
        console.log(result[i]);
    }
}