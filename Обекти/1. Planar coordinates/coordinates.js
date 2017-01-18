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
            a: Math.abs(this.firstX - this.secondX),
            b: Math.abs(this.firstY - this.secondY),
            getLength: function() {
                return Math.sqrt(Math.pow(this.firstX - this.secondX, 2) + Math.pow(this.firstY - this.secondY), 2);
            }
        };
    }
    for (let i = 0; i < lines; i++)
    {
        console.log(linesArray[i].getLength());
        //if (linesArray[i.length] + linesArray[i + 1] >)
    }
}


function makeLine(fX, fY, sX, sY) 
{
    return {
        firstX: fX,
        firstY: fY,
        secondX: sX,
        secondY: sY
    }
}

solve([
  '5', '6', '7', '8',
  '1', '2', '3', '4',
  '9', '10', '11', '12'
]);
