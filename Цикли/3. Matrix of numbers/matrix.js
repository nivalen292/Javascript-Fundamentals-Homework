function solve(args)
{
    let n = +args[0],
        result = "";
    for (let i = 0; i < n; i += 1)
    {
        for (let j = i + 1; j <= n + i; j += 1)
        {
            result += j + " ";
        }
        result += "\n";
    }
    console.log(result);
}