function solve(args)
{
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        biggest = a;
    if (b > a)
    {
        biggest = b;
        if (c > b)
        {
            biggest = c;
        }
    }
    else if (c > a)
    {
        biggest = c;
        if (b > c)
        {
            biggest = b;
        }
    }
}