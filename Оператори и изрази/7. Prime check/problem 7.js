function solve(args)
{
    var N = +args[0],
        prime,
        check = new Boolean();
    for (var divider = 2; divider < N; divider += 1)
    {
        if (N % divider === 0)
        {
            prime = false;
            break;
        }
        else
        {
            prime = true;
        }
    }
    if (N < 2)
    {
        prime = false;
    }
    if (N === 2)
    {
        prime = true;
    }
    console.log(prime);
}