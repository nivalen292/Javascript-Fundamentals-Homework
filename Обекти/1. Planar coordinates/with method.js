function solve(args)
{
    let lines = args.length / 4,
        linesArray = [];
    for (let i = 0; i < lines; i++)
    {
        linesArray[i] = makeLine(+args[i*4], +args[i*4 + 1], +args[i*4 + 2], +args[i*4 + 3]);
    }


    for (let i = 0; i < lines; i++)
    {
        console.log(linesArray[i].length);
        //if (linesArray[i.length] + linesArray[i + 1] >)
    }

    function makeLine(fX, fY, sX, sY) 
    {
        return {
            firstX: fX,
            firstY: fY,
            secondX: sX,
            secondY: sY,
            a: Math.abs(this.firstX - this.secondX),
            b: Math.abs(this.firstY - this.secondY),
            length: Math.sqrt(Math.pow(this.a, 2) + Math.pow(this.b, 2))
        }
    }
}




solve([
  '5', '6', '7', '8',
  '1', '2', '3', '4',
  '9', '10', '11', '12'
]);