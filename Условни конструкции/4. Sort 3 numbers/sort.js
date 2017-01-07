function solve(args)
{
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        first,
        second,
        third;
    if (a >= b && a >= c) first = a;
    if (b >= a && b >= c) first = b;
    if (c >= b && c >= a) first = c;
    if (first === a) 
    {
        if (b >= c)
        {
            second = b;
            third = c;
        }
        else 
        {
            second = c;
            third = b;
        }
    }
    else if (first === b)
    {
        if (a >= c)
        {
            second = a;
            third = c;
        }
        else 
        {
            second = c;
            third = a;
        }
    }
    else if (first === c)
    {
        if (a >= b)
        {
            second = a;
            third = b;
        }
        else 
        {
            second = b;
            third = a;
        }
    }
    console.log(first + " " + second + " " + third);
}