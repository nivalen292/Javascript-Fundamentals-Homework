function solve(args)
{
    let lines = args.length / 4,
        linesArray = [];
    for (let i = 0; i < lines; i++)
    {
        linesArray[i] = {
            firstX: +args[i*4],
            firstY: +args[i*4 + 1],
            secondX: +args[i*4 + 2],
            secondY: +args[i*4 + 3],
            // a: Math.abs(this.firstX - this.secondX),
            // b: Math.abs(this.firstY - this.secondY),
            // length: Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2))
        };
        let a = linesArray[i].secondX - linesArray[i].firstX,
            b = linesArray[i].secondY - linesArray[i].firstY,
            sumLength = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        linesArray[i].sumLength = sumLength.toFixed(2); // wrong math with toFixed and so on..
    }
    for (let i = 0; i < lines; i++)
    {
        console.log(linesArray[i].sumLength);
    }
    if (linesArray[0].sumLength + linesArray[1].sumLength > linesArray[2].sumLength &&
        linesArray[1].sumLength + linesArray[2].sumLength > linesArray[0].sumLength &&
        linesArray[0].sumLength + linesArray[2].sumLength > linesArray[1].sumLength)
    {
        console.log("Triangle can be built");
    }
    else
    {
        console.log("Triangle can not be built");
    }
}

solve([
  '5', '2', '7', '8',
  '1', '2', '3', '4',
  '3', '4', '11', '7'
]);