function solve(args)
{
    var a = +args[0],
        b = +args[1],
        c = +args[2],
        biggest = a;
    if (b > biggest)
    {
        biggest = b;
    }
    if (c > biggest)
    {
        biggest = c;
    }
    console.log(biggest);
}