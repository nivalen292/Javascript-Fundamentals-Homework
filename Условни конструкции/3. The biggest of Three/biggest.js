function solve(args)
{
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        biggest;
    if (a > b)
    {
        if (b > c)
        {
            biggest = a;
        }
        else
        {
            if (b < c)
            {
                if (a > c)
                {
                    biggest = a;
                }
                else 
                {
                   biggest = a;
                }
            }
        }
    }
    else
    {
        if (a > c)
        {
            b = biggest;
        }
        else
        {
            if (b < c)
            {
                biggest = c;
            }
            else
            {
                biggest = b;
            }
        }
    }
}