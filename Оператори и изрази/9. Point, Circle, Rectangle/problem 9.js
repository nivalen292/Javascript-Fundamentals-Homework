function solve(args) 
{
    var x = +args[0];
    var y = +args[1];
    var circle = "";
    var rectangle = "";
    if (x < -1 || x > 5 || y > 1 || y < -1)
    {
        rectangle = "outside rectangle"
    }
    else
    {
        rectangle = "inside rectangle";
    }
    if ((x - 1) * (x - 1) + (y - 1) * (y - 1) < Math.pow(1.5, 2))
    {
        circle = "inside circle";
    }
    else
    {
        circle = "outside circle";
    }
    console.log(circle + " " + rectangle);
}