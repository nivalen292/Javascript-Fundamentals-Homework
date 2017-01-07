function solve(args)
{
    var a = +args[0],
        b = +args[1],
        c;
    if (a > b)
    {
        c = a; // store the value of A in C
        a = b;
        b = c;
        console.log(a + " " + b);
    }
    else
    {
        console.log(a + " " + b);
    }
}