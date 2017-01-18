function solve(args)
{
    var lines = args.length / 4,
        linesArray = [],
        isTriangle;
    for (var i = 0; i < lines; i++)
    {
        linesArray[i] = {
            firstX: +args[i*4],
            firstY: +args[i*4 + 1],
            secondX: +args[i*4 + 2],
            secondY: +args[i*4 + 3],
        };
        var a = linesArray[i].secondX - linesArray[i].firstX,
            b = linesArray[i].secondY - linesArray[i].firstY,
            sumLength = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        linesArray[i].sumLength = sumLength;
    }
     if (linesArray[0].sumLength + linesArray[1].sumLength > linesArray[2].sumLength &&
        linesArray[1].sumLength + linesArray[2].sumLength > linesArray[0].sumLength &&
        linesArray[0].sumLength + linesArray[2].sumLength > linesArray[1].sumLength)
    {
        isTriangle = "Triangle can be built";
    }
    else
    {
        isTriangle = "Triangle can not be built";
    }
    for (var i = 0; i < lines; i++)
    {
        console.log(linesArray[i].sumLength.toFixed(2));
    }
    console.log(isTriangle);
}

solve([
  '5', '2', '7', '8',
  '1', '2', '3', '4',
  '3', '4', '11', '7'
]);